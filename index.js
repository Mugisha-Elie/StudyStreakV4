document.getElementById('year').textContent = new Date().getFullYear();

const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar(){
    const isOpen = sidebar.classList.contains("translate-x-0");

    if(isOpen){
        sidebar.classList.replace("translate-x-0", "-translate-x-full");
        overlay.classList.replace("opacity-100", "opacity-0");
        overlay.classList.replace("visible", "invisible");
    }else {
        sidebar.classList.replace("-translate-x-full", "translate-x-0");
        overlay.classList.replace("opacity-0", "opacity-100");
        overlay.classList.replace("invisible", "visible");
      }
}

sidebarToggle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar)


 const features = [
      { title: 'Upload Files', description: 'Add new study files to your streak.' },
      { title: 'View File History', description: 'See all your uploaded files.' },
      { title: 'Progress', description: 'Track your study progress.' },
      { title: 'Milestone', description: 'Celebrate your study achievements.' },
      { title: 'User Account', description: 'Manage your profile and settings.' },
    ];

    const featureGrid = document.getElementById("featureGrid");

   /* features.forEach((feature) => {
  const link = document.createElement("a");
  link.href = "upload.html"; // Replace with actual link like "/upload", "/history", etc.
  link.className = "block"; // Makes the whole area clickable

  const card = document.createElement("div");
  card.className = "bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition";

  const title = document.createElement("h2");
  title.className = "text-lg font-semibold mb-2";
  title.textContent = feature.title;

  const desc = document.createElement("p");
  desc.className = "text-gray-600";
  desc.textContent = feature.description;

  card.appendChild(title);
  card.appendChild(desc);
  link.appendChild(card);
  featureGrid.appendChild(link);
});*/

    