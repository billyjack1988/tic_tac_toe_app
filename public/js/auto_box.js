  function myFunction() {
      var x = document.getElementById("myInput").value;
      document.getElementById("demo").innerHTML = "Enter their names in the boxes below:<br>";
      for (var i = 1; i <= x; i++) {
          var input = document.createElement("input");
          input.type = "text";
          input.name = "text" + i;
          input.id = "marv";
          input.required = true;
          input.placeholder = "Enter Name"
          document.getElementById("demo").appendChild(input).value;
      }
  }

  function sound2() {
      var s = new Audio('/img/sound2.mp3');
      s.play();
  }

  function tiesound() {
      var s = new Audio('/img/git_it.mp3');
      s.play();
  }

  function playsound() {
      var s = new Audio('/img/getswifty.mp3');
      s.play();
  }

  function playsound2() {
      var s = new Audio('/img/rmtheme.mp3');
      s.play();
  }