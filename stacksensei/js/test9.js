$(document).ready(function(){
    $(". pre").each(function(){
     let cptext = $(this).text().trim();
     let newBtn = $('<button class="cpbtn" cptext>COPY</button>');
    newBtn.attr('cptext',cptext);
    $(this).append(newBtn);

  });
  $(".cpbtn").on('click',function(){
    const input = document.createElement('textarea');
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
  });
  });
