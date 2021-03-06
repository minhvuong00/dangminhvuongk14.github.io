$(document).ready(function() {
    var i = 2; 
    $("#btn2").click(function() {
       $("#myModal").modal();
    });

    function kiemTraTen() {
       var i=1;
       let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z][a-z]+){1,})$/;
       if ($("#Name").val() == "") {
           $("#tbName").html("Không để trống");
           return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi kí tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*")
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return true;
         } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("từ 1 đến 100");
                return false;
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);

    function kiemTraCLB() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#CLB").val() == "") {
            $("#tbCLB").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#CLB").val())) {
            $("#tbCLB").html("Dùng chữ hoa từ đầu và số");
            return true;
        } 
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(kiemTraCLB);

    function kiemTraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7)
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        } 
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạnh 0xxx-xxx-xxx trong đó x là số");
            return ftrue;
        } 
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    $("#save").click(function() {
        if (kiemTraTen() == true && kiemTraSoAo() == true && kiemTraSDT() == true && kiemTraNTT() == true && kiemTraCLB() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#CLB").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhsach").append(row);
            $("#myModal").modal("hide");
        }
    })
})