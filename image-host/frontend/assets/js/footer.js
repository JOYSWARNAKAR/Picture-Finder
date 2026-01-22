// Function to load footer.html and append it to body
async function loadFooter() {
  try {
    const res = await fetch("pages/footer.html");
    const footerHtml = await res.text();

    const footerContainer = document.createElement("div");
    footerContainer.innerHTML = footerHtml;

    document.body.appendChild(footerContainer);
  } catch (err) {
    console.error("Failed to load footer:", err);
  }
}

// Call the function
loadFooter();
