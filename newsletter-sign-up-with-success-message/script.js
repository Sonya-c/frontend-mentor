tailwind.config = {
  theme: {
    extend: {
      colors: {
        "Tomato": "hsl(4, 100 %, 67 %)",
        "DarkSlateGrey": "hsl(234, 29%, 20%)",
        "CharcoalGrey": "hsl(235, 18%, 26%)",
        "Grey": "hsl(231, 7%, 60%)",
        "White": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      backgroundImage: {
        illustrationDesktop: "url('assets/images/illustration-sign-up-desktop.svg')",
        illustrationMobile: "url('assets/images/illustration-sign-up-mobile.svg')",
      },
      listStyleImage: {
        checkmark: 'url("assets/images/icon-list.svg")',
      },
    }
  }
}

$(document).ready(() => {
  console.info("Document ready");

  $("#form").submit((event) => {
    event.preventDefault();
    console.log("Form submitted");
    const email = $("#email").val();

    $("#success-message").removeClass("hidden");
    $("#signup").addClass("hidden");
  });

  $("#dismiss-btn").click(() => {
    $("#success-message").addClass("hidden");
    $("#signup").removeClass("hidden");
  });

});

