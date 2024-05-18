window.addEventListener('DOMContentLoaded', function() {
    var imgElement = document.getElementById('abt-us-pic');
    if (window.innerWidth <= 991 && imgElement) {
      imgElement.parentNode.removeChild(imgElement);
    }
  });