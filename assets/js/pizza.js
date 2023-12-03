function showDetails(bookId) {
    var detailElement = document.getElementById("detail-" + bookId);
    var detailBlackElement = document.getElementById("black-" + bookId);
  
    detailElement.classList.toggle("d-block");
    detailBlackElement.classList.toggle("d-block");
  }
  
  document.querySelectorAll('.detail-black').forEach(function (detailBlackElement) {
    detailBlackElement.addEventListener('click', function () {
      var detailId = this.id.replace('black-', ''); // 'black-' önekini kaldır
      var detailElement = document.getElementById('detail-' + detailId);
  
      detailElement.classList.toggle('d-block', false);
      detailBlackElement.classList.toggle('d-block', false);
    });
  });
  document.querySelector('body').addEventListener("click",function(){
  
  });
  

  