const myProjects = [
    { 
        type: "web", 
        title: "Falcon Prototype", 
        desc: "Modern website for CO₂ cylinder manufacturing & distribution company", 
        link: "https://www.figma.com/design/p5LHuH392wV77CFJfaFtBw/Falcon-website-prototype-Design?node-id=0-1&t=nn4tUAoaEBdfEYSj-1", 
        preview: "IMAGES/Falcon.png" 
    },
    { 
        type: "web", 
        title: "Bath Spa University Prototype", 
        desc: "University website redesign with intuitive navigation", 
        link: "https://www.figma.com/design/5zl1B3uqrK7qjh5atTiGAf/Bath-Spa-University-Prototype?node-id=0-1&t=8EXnUZ0dUjlqoQx7-1", 
        preview: "IMAGES/BSU.png" 
    },
    { 
        type: "web", 
        title: "Ralph Lauren Prototype", 
        desc: "Fashion brand e-commerce experience", 
        link: "https://www.figma.com/design/4Yg2QAGiKdhu79OI6BcWky/Polo-website-Prototype?t=8EXnUZ0dUjlqoQx7-1", 
        preview: "IMAGES/polo.png" 
    },
    { 
        type: "app", 
        title: "Tunify App Prototype", 
        desc: "Modern music streaming mobile app", 
        link: "https://www.figma.com/design/9yUP7NHPt2ypiVAjfUvJmH/Untitled?node-id=0-1&t=sPD6SUBAVc2HGdCu-1", 
        preview: "IMAGES/Tunify.png" 
    },
    { 
        type: "app", 
        title: "Soon App Prototype", 
        desc: "Food ordering mobile app with intuitive menu and checkout", 
        link: "https://www.figma.com/design/m4ly7sGsiYG2MLox8x0O6z/Soon?t=sPD6SUBAVc2HGdCu-1", 
        preview: "IMAGES/Soon.png" 
    },

    // video stuff — these are the ones I actually built or animated
    { 
        type: "video", 
        title: "Chef's Recipe Website Demo", 
        desc: "Food recipe website I built", 
        link: "https://youtu.be/IQxh82MreMM", 
        preview: "https://img.youtube.com/vi/IQxh82MreMM/hqdefault.jpg" 
    },
    { 
        type: "video", 
        title: "School Website Demo", 
        desc: "School website live demo", 
        link: "https://youtu.be/4MmpDEGvdL8", 
        preview: "https://img.youtube.com/vi/4MmpDEGvdL8/hqdefault.jpg" 
    },
    { 
        type: "video", 
        title: "2D Unity Game Demo", 
        desc: "Unity 2D game gameplay", 
        link: "https://youtu.be/EFRbnDlJXLA", 
        preview: "https://img.youtube.com/vi/EFRbnDlJXLA/hqdefault.jpg" 
    },
    { 
        type: "video", 
        title: "Appointment Scheduler Chatbot Demo", 
        desc: "Dialogflow chatbot in action", 
        link: "https://youtu.be/LMZUuEUDc1c", 
        preview: "https://img.youtube.com/vi/LMZUuEUDc1c/hqdefault.jpg" 
    },
    { 
        type: "video", 
        title: "Soon App Demo", 
        desc: "Food ordering app video walkthrough", 
        link: "https://youtu.be/fL9xaY1yolE", 
        preview: "https://img.youtube.com/vi/fL9xaY1yolE/hqdefault.jpg" 
    },
    { 
        type: "video", 
        title: "Python Vending Machine Demo", 
        desc: "Python vending machine simulation", 
        link: "https://youtu.be/agY__5n8LIQ", 
        preview: "https://img.youtube.com/vi/agY__5n8LIQ/hqdefault.jpg" 
    }
];

function renderProjects(filtered) {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';
    
    filtered.forEach(p => {
        const isVideo = p.type === "video";
        container.innerHTML += `
            <div class="project-card glass rounded-3xl overflow-hidden group">
                <div class="h-52 bg-cover bg-center relative" style="background-image: url('${p.preview}')">
                    ${isVideo ? `
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fa-solid fa-play-circle text-7xl text-white/90 drop-shadow-2xl"></i>
                        </div>
                    ` : `
                        <div class="absolute top-4 right-4 px-4 py-1 bg-black/70 text-xs rounded-full backdrop-blur">FIGMA</div>
                    `}
                </div>
                <div class="p-8">
                    <h3 class="text-2xl font-semibold">${p.title}</h3>
                    <p class="text-gray-400 mt-3 text-sm">${p.desc}</p>
                    <a href="${p.link}" target="_blank" class="mt-8 inline-flex items-center gap-x-3 text-cyan-400 hover:text-white transition">
                        ${isVideo ? 'WATCH VIDEO' : 'OPEN PROTOTYPE'} 
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

function filterProjects(cat) {
    function filterProjects(cat) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    if (cat === 'all') document.getElementById('tab-all').classList.add('tab-active');
    else if (cat === 'web') document.getElementById('tab-web').classList.add('tab-active');
    else if (cat === 'app') document.getElementById('tab-app').classList.add('tab-active');
    else if (cat === 'video') document.getElementById('tab-video').classList.add('tab-active');
    
    const filtered = cat === 'all' ? projects : projects.filter(p => p.type === cat);
    renderProjects(filtered);
}
}

document.getElementById('mobile-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { 
            e.preventDefault(); 
            target.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});

renderProjects(projects);