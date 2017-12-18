<script async src = "https://www.googletagmanager.com/gtag/js?id=UA-107730728-1" ></script>
<script defer = "defer" type = "text/javascript">
  window.onload = function() {

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments)
    };
    gtag('js', new Date());
    gtag('config', 'UA-107730728-1');


    // Google Analytics code used to track contact 7 forms
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-107730728-1', 'auto');


    /* -------------------------------------
    Google Event Analytics Tracking for Contact 7 Forms & Phone Numbers

    [contact-form-7 id="7" title="General Contact Form"]
    [contact-form-7 id="56746" title="Career Request Form"]
    [contact-form-7 id="66133" title="CIN | Appointment Request"]
    [contact-form-7 id="58104" title="Infusion Form"]


    Place in uncode: theme options: css & js
    ------------------------------------- */

    document.addEventListener('wpcf7mailsent', function(event) {
      // console.log("Form 7 ID = ",event.detail.contactFormId);
      // ADD Contact 7 Form ID's and Google Analytics information here
      // [contact_form_7_id, ga_form_category, ga_form_action, ga_form_label, ga_form_value]
      var formIds = [
        [56697, "Contact Form Submission", "submit", "appointment"],
        [57337, "Contact Form Submission", "submit", "career"],
        [56681, "Contact Form Submission", "submit", "general"],
        [58104, "Contact Form Submission", "submit", "infusion"]
      ];

      for (var i = 0; i < formIds.length; i++) {
        var formId = formIds[i][0];
        // console.log("Each Form ID = ",formId);
        if (event.detail.contactFormId == formId) {
          var category = formIds[i][1];
          var action = formIds[i][2];
          var label = formIds[i][3];
          // console.log("Google Analytics Category = ",category);
          // console.log("Google Analytics Action = ",action);
          // console.log("Google Analytics Label = ",label);
          ga('send', 'event', category, action, label);
        }
      }
    }, false);

    /*
    Telephone Number (footer) | Telephone Number (body) | Telephone Number (menu) | Telephone Number (header)
    Category: Telephone
    Action: click
    Label: footer | body | menu | header
    Value: <empty>
    */

    jQuery(document).ready(function() {
      jQuery('.telephone-number-footer').click(function() {
        console.log("Telephone Number Clicked (Footer)");
        return ga('send', 'event', 'Telephone', 'click', 'footer');
      });
      jQuery('.telephone-number-body').click(function() {
        console.log("Telephone Number Clicked (Body)");
        return ga('send', 'event', 'Telephone', 'click', 'body');
      });
      jQuery('.telephone-number-menu').click(function() {
        console.log("Telephone Number Clicked (Menu)");
        return ga('send', 'event', 'Telephone', 'click', 'menu');
      });
      jQuery('.telephone-number-header').click(function() {
        console.log("Telephone Number Clicked (Header)");
        return ga('send', 'event', 'Telephone', 'click', 'header');
      });
    });


    /* ========================================================================================== */
    // Modal Window

    // "Submit New Question/Comment" Form
    if (document.querySelector(".open-modal")) {
      document.querySelector(".open-modal").addEventListener("click", openModal);
    }
    if (document.querySelector(".open-modal-widget")) {
      document.querySelector(".open-modal-widget").addEventListener("click", openModal);
    }
    if (document.querySelector(".open-modal-header")) {
      document.querySelector(".open-modal-header").addEventListener("click", openModal);
    }
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var ga_tracking = document.getElementsByClassName("ga-tracking")[0];

    function openModal() {
      if (modal) {
        console.log("Modal Exists");
      }
      console.log("Open Modal");
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    ga_tracking.onclick = function() {
      console.log("GA Tracking on submit button clicked");
      ga('send', 'event', "Question/Comment Form Submission", "submit", "fusionsoft");
    }

  }
</script>
