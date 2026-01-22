
  const searchForm = document.getElementById("searchForm");
  const gallery = document.getElementById("gallery");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchText = document.getElementById("searchInput").value.trim();

    if (!searchText) return;

    gallery.innerHTML = "<p>Loading images...</p>";

    try {
      // ✅ CORRECT BACKEND CALL
      const res = await fetch(
        `http://localhost:4000/api/images?query=${searchText}`
      );

      const data = await res.json();

      gallery.innerHTML = "";

      // ✅ SHOW 5 IMAGES
      data.photos.slice(0, 5).forEach((photo) => {
        gallery.innerHTML += `
          <div class="col-md-4">
            <div class="card shadow-sm">
              <img src="${photo.src.medium}" class="card-img-top" />
              <div class="card-body text-center">
                <a 
                  href="${photo.src.original}" 
                  target="_blank" 
                  download 
                  class="btn btn-success btn-sm">
                  Download
                </a>
              </div>
            </div>
          </div>
        `;
      });

    } catch (error) {
      console.error(error);
      gallery.innerHTML = "<p class='text-danger'>Failed to load images</p>";
    }
  });

