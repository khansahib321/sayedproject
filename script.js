
function upDate(event) {
    const imageDiv = document.getElementById('image');
    

    const previewPic = event.target; // The image element that triggered the event
    
   
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    // Update the text of the #image div to the alt text of the hovered image
    imageDiv.textContent = previewPic.alt;
  }
  
 
  function restore() {
    const imageDiv = document.getElementById('image');
    // Reset the background to a default state (you can set a default image or text)
    imageDiv.style.backgroundImage = '';  // No background image
    imageDiv.textContent = 'Hover over an image below to display here.'; // Default text
  }
  
 
  const images = document.querySelectorAll('.image-gallery img');
  images.forEach(img => {
    img.addEventListener('mouseover', upDate);  // Trigger the update on hover
    img.addEventListener('mouseout', restore);  // Reset on mouse leave
  });
  

  document.getElementById('undoButton').addEventListener('click', restore);
  