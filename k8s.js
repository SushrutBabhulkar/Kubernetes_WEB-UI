function docker() {
            // here xhr is a object from XMLHttpRequest() class
            var i = document.getElementById("input").value

            var xhr = new XMLHttpRequest();
            // here false means sync and true means async with AJAX
            xhr.open("GET", "http://192.168.1.7/cgi-bin/k8s.py?x=" + i, true);
            xhr.send();

            // here  onload will take the return text from server [cgi-bin folder]
            xhr.onload = function() {
                    var output = xhr.responseText;
                    document.getElementById("d1").innerHTML = output;
            }
}
