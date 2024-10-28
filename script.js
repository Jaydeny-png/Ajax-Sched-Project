$(document).ready(function () {
  const btn = $("#submitDay");

  btn.on('click', function () {


    const selectedDay = $("#dayInput");

    $.ajax({
      url: `https://jsonkeeper.com/b/UAH7`,
      method: 'GET',
      success: function (data) {
        const schedule = data.schedule
        console.log(schedule);

      },
      error: function () {
        alert("Theres a connection error");
      }
    });

  })
})