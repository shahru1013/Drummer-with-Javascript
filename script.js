   function playAudio(e) {
       	    var audi = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            var anim = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
            if(!audi) return;
            audi.currentTime=0;
            audi.play();
            anim.classList.add('playing');
            anim.classList.remove('playing');
            anim.classList.toggle('playing');
            var nm = document.getElementById("music");
	          nm.classList.add('playing');
            nm.classList.remove('playing');
            nm.classList.toggle('playing');
       }

		function removeAnimation(e) {
			this.classList.remove('playing');
		}

		var removeAnim = document.querySelectorAll('.btn');
		var btnClick = document.querySelectorAll(".btn");
			for(i = 0;i<btnClick.length;i++){
			btnClick[i].addEventListener('click',playByClick);
		}

        function playByClick(clickedCellEvent) {
        	  const clickedCell = clickedCellEvent.target;
              var num = clickedCell.getAttribute('data-key');
           var audi = document.querySelector(`audio[data-key="${num}"]`);
           var anim = document.querySelector(`.btn[data-key="${num}"]`);
           if(!audi) return;
           audi.currentTime=0;
           audi.play();
           anim.classList.add('playing');
            anim.classList.remove('playing');
             anim.classList.toggle('playing');
            var nm = document.getElementById("music");
	        nm.classList.add('playing');
            nm.classList.remove('playing');
             nm.classList.toggle('playing');

        }

		for(i = 0;i<removeAnim.length;i++){
			removeAnim[i].addEventListener('transitionend',removeAnimation);
		}
	
   window.addEventListener('keydown',playAudio);
