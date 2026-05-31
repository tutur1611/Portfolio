const canvas = document.getElementById("particles");
const context = canvas.getContext("2d");
const revealElements = document.querySelectorAll(".reveal");
const competencyCards = document.querySelectorAll(".competency");
const tiltCards = document.querySelectorAll(
    ".portrait-card, .competency, #skills .card, .timeline-item, #complements .card"
);

const particles = [];
const particleCount = 80;
let lastFocusedCard = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.4 + 0.6,
        speedX: (Math.random() - 0.5) * 0.22,
        speedY: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.55 + 0.2
    };
}

function initParticles() {
    particles.length = 0;

    for (let index = 0; index < particleCount; index += 1) {
        particles.push(createParticle());
    }
}

function drawParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, particleIndex) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
        }

        context.beginPath();
        context.fillStyle = `rgba(139, 211, 255, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let otherIndex = particleIndex + 1; otherIndex < particles.length; otherIndex += 1) {
            const other = particles[otherIndex];
            const distanceX = particle.x - other.x;
            const distanceY = particle.y - other.y;
            const distance = Math.hypot(distanceX, distanceY);

            if (distance < 120) {
                context.beginPath();
                context.strokeStyle = `rgba(139, 211, 255, ${0.08 - distance / 1800})`;
                context.lineWidth = 1;
                context.moveTo(particle.x, particle.y);
                context.lineTo(other.x, other.y);
                context.stroke();
            }
        }
    });

    window.requestAnimationFrame(drawParticles);
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.18
    }
);

revealElements.forEach((element) => observer.observe(element));

function resetTilt(card) {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--tilt-spin", "0deg");
}

tiltCards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("pointermove", (event) => {
        if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const bounds = card.getBoundingClientRect();
        const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
        const rotateY = normalizedX * 13;
        const rotateX = normalizedY * -11;
        const rotateZ = (normalizedX + normalizedY) * -3.8;

        card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
        card.style.setProperty("--tilt-spin", `${rotateZ.toFixed(2)}deg`);
    });

    card.addEventListener("pointerleave", () => resetTilt(card));
    card.addEventListener("pointercancel", () => resetTilt(card));
    card.addEventListener("blur", () => resetTilt(card));
});

window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
});

resizeCanvas();
initParticles();
drawParticles();