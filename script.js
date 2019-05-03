window.onload = function () {
    document.querySelectorAll("INPUT[type='radio']", "LABEL").forEach(function (rd) {
        rd.addEventListener("mousedown",
            function () {
                if (this.checked) {
                    this.onclick = function () {
                        this.checked = false
                    }
                } else {
                    this.onclick = null
                }
            })
    })
    var hey = document.getElementById("cat")
  
}