$(document).ready(function(){
    $("#aoemporterclick").click(function(){
        $("#aoemporter").show();
        $("#aoquand").hide();
        $("#aocomment").hide();
        $("#aonoter").hide();
        $("#aocharte").hide();
    });
    $("#aoquandclick").click(function(){
        $("#aoquand").show();
        $("#aoemporter").hide();
        $("#aocomment").hide();
        $("#aonoter").hide();
        $("#aocharte").hide();
    });
    $("#aocommentclick").click(function(){
        $("#aoquand").hide();
        $("#aoemporter").hide();
        $("#aocomment").show();
        $("#aonoter").hide();
        $("#aocharte").hide();
    });
    $("#aonoterclick").click(function(){
        $("#aoquand").hide();
        $("#aoemporter").hide();
        $("#aocomment").hide();
        $("#aonoter").show();
        $("#aocharte").hide();
    });
    $("#aocharteclick").click(function(){
        $("#aoquand").hide();
        $("#aoemporter").hide();
        $("#aocomment").hide();
        $("#aonoter").hide();
        $("#aocharte").show();
    });
});
