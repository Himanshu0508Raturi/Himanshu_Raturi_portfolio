/** A projected 3D point sculpture. No WebGL dependency or network resources. */
export function createNeuralSculpture(canvas, toggle, motionPreference) {
  const context = canvas.getContext("2d");
  if (!context) {
    toggle.hidden = true;
    return;
  }
  let width = 0,
    height = 0,
    frame = 0,
    rotation = 0.25,
    lastTime = 0;
  let paused = motionPreference.matches,
    visible = true,
    pointerX = 0,
    pointerY = 0;
  let currentX = 0,
    currentY = 0;
  const rings = 72,
    segments = 34;
  const points = [];
  // Twisted torus: its paths form a connected, spatial computational object.
  for (let u = 0; u < rings; u++) {
    const theta = (u / rings) * Math.PI * 2;
    for (let v = 0; v < segments; v++) {
      const phi = (v / segments) * Math.PI * 2;
      const minor = 0.34 + 0.045 * Math.cos(theta * 3);
      const radius = 0.69 + minor * Math.cos(phi);
      points.push({
        x: radius * Math.cos(theta),
        y: radius * Math.sin(theta),
        z: minor * Math.sin(phi) + 0.11 * Math.sin(theta * 3),
        ring: u,
        segment: v,
      });
    }
  }
  function draw(time = 0) {
    frame = 0;
    const delta = Math.min(time - lastTime, 40);
    lastTime = time;
    if (!paused && !motionPreference.matches) rotation += delta * 0.00008;
    currentX += (pointerX - currentX) * 0.04;
    currentY += (pointerY - currentY) * 0.04;
    context.clearRect(0, 0, width, height);
    const scale = Math.min(width * 0.41, height * 0.38);
    const tilt = 1.05 + currentY * 0.2;
    const turn = rotation + currentX * 0.25;
    const cosT = Math.cos(tilt),
      sinT = Math.sin(tilt),
      cosR = Math.cos(turn),
      sinR = Math.sin(turn);
    const projected = points.map((point) => {
      const x = point.x * cosR - point.y * sinR;
      const y = point.x * sinR + point.y * cosR;
      const ry = y * cosT - point.z * sinT;
      const z = y * sinT + point.z * cosT;
      const perspective = 3.5 / (3.5 - z);
      return {
        x: width * 0.5 + (x * 0.94 + ry * 0.28) * scale * perspective,
        y: height * 0.51 + (ry * 0.94 - x * 0.28) * scale * perspective,
        z,
        alpha: 0.2 + ((z + 1.2) / 2.4) * 0.7,
      };
    });
    // Fine strands connect every point into a continuous mesh.
    context.lineWidth = 0.48;
    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      const next =
        projected[Math.floor(i / segments) * segments + ((i + 1) % segments)];
      context.strokeStyle = `rgba(195,54,31,${p.alpha * 0.6})`;
      context.beginPath();
      context.moveTo(p.x, p.y);
      context.lineTo(next.x, next.y);
      context.stroke();
      if (i % 3 === 0) {
        const across = projected[(i + segments) % projected.length];
        context.strokeStyle = `rgba(195,54,31,${p.alpha * 0.22})`;
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(across.x, across.y);
        context.stroke();
      }
    }
    for (let i = 0; i < projected.length; i += 2) {
      const p = projected[i];
      context.fillStyle = `rgba(195,54,31,${p.alpha})`;
      context.beginPath();
      context.arc(p.x, p.y, p.z > 0.25 ? 1 : 0.65, 0, Math.PI * 2);
      context.fill();
    }
    if (!paused && !motionPreference.matches && visible && !document.hidden)
      frame = requestAnimationFrame(draw);
  }
  function start() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = performance.now();
    draw(lastTime);
  }
  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    start();
  }
  function updateToggle() {
    const stopped = paused || motionPreference.matches;
    toggle.setAttribute("aria-pressed", String(stopped));
    toggle.setAttribute(
      "aria-label",
      stopped ? "Play visual animation" : "Pause visual animation",
    );
    toggle.innerHTML = stopped
      ? 'Play motion <span aria-hidden="true">▷</span>'
      : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
    toggle.hidden = motionPreference.matches;
  }
  toggle.addEventListener("click", () => {
    paused = !paused;
    updateToggle();
    start();
  });
  canvas.addEventListener(
    "pointermove",
    (event) => {
      if (motionPreference.matches || event.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / width - 0.5;
      pointerY = (event.clientY - rect.top) / height - 0.5;
    },
    { passive: true },
  );
  canvas.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
  });
  motionPreference.addEventListener("change", () => {
    paused = motionPreference.matches;
    updateToggle();
    start();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else start();
  });
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible) start();
    else cancelAnimationFrame(frame);
  }).observe(canvas);
  new ResizeObserver(resize).observe(canvas);
  updateToggle();
  resize();
}
