import React from "react";

function Contact() {
  return (
    <div
      class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      tabindex="-1"
      role="dialog"
      id="modalTour"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-body p-5">
            <h2 class="fw-bold mb-0">Connect with us</h2>

            <ul class="d-grid gap-4 my-5 list-unstyled small">
              <li class="d-flex gap-4">
                <img src="Assets/telephone.svg" height="30px" alt="call icon" />
                <div>
                  <h5 class="mb-0" style="color:black">
                    +91 7518782688
                  </h5>
                  <span>Please make calls between decent office timings.</span>
                </div>
              </li>
              <li class="d-flex gap-4">
                <img
                  src="Assets/whatsapp.svg"
                  height="30px"
                  alt="WhatsApp icon"
                />
                <div>
                  <h5 class="mb-0" style="color:black">
                    +91 8750517931
                  </h5>
                  <span>
                    Drop your message and wait patiently for response.
                  </span>
                </div>
              </li>
              <li class="d-flex gap-4">
                <img src="Assets/geo.svg" height="30px" />
                <div>
                  <h5 class="mb-0" style="color:black">
                    Balrampur
                  </h5>
                  <span>Come, There is a lot to explore here.</span>
                </div>
              </li>
            </ul>

            <ul
              class="list-unstyled d-flex"
              style="justify-content: space-around;"
            >
              <li class="ms-3">
                <a class="link-body-emphasis" href="https://x.com/PimpAfri">
                  <img
                    src="./Assets/twitter-x.svg"
                    alt="twitter logo"
                    height="25px"
                  />
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="link-body-emphasis"
                  href="https://www.instagram.com/persie00u/"
                >
                  <img
                    src="./Assets/instagram.svg"
                    alt="instagram logo"
                    height="25px"
                  />
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="link-body-emphasis"
                  href="https://www.linkedin.com/in/mohd-meraj-ansari-0b8791167"
                >
                  <img
                    src="./Assets/linkedin.svg"
                    alt="facebook logo"
                    height="25px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
