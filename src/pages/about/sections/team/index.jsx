import { Container, Typography } from "@components/ui";

export const Team = () => {
  return (
    <section className="team">
      <Container>
        <div className="team__wrapper stack column">
          <div className="team__text stack column">
            <Typography tag="h2" center weight="500" className="team__title">
              Our Team
            </Typography>
            <Typography tag="p" center className="team__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </div>

          <ul className="team__list stack align-center">
            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/john.jpg"
                  width="276"
                  height="326"
                  alt="John - Product manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    John
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    Product manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.1701 13.7599C12.1451 13.6149 9.8076 13.8537 8.6626 15.9724C7.5176 18.0912 8.67135 20.2962 9.3926 21.1337C10.1039 21.9174 12.3651 23.4012 14.7639 21.9524C15.3589 21.5937 16.1001 21.3249 16.9401 18.5187L16.8426 7.4762C16.6801 8.69245 18.0239 11.5449 21.8476 11.8824"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.25 1.5625C5.33832 1.5625 4.46398 1.92466 3.81932 2.56932C3.17466 3.21398 2.8125 4.08832 2.8125 5C2.8125 5.91168 3.17466 6.78602 3.81932 7.43068C4.46398 8.07534 5.33832 8.4375 6.25 8.4375C7.16168 8.4375 8.03602 8.07534 8.68068 7.43068C9.32534 6.78602 9.6875 5.91168 9.6875 5C9.6875 4.08832 9.32534 3.21398 8.68068 2.56932C8.03602 1.92466 7.16168 1.5625 6.25 1.5625ZM4.6875 5C4.6875 4.5856 4.85212 4.18817 5.14515 3.89515C5.43817 3.60212 5.8356 3.4375 6.25 3.4375C6.6644 3.4375 7.06183 3.60212 7.35485 3.89515C7.64788 4.18817 7.8125 4.5856 7.8125 5C7.8125 5.4144 7.64788 5.81183 7.35485 6.10485C7.06183 6.39788 6.6644 6.5625 6.25 6.5625C5.8356 6.5625 5.43817 6.39788 5.14515 6.10485C4.85212 5.81183 4.6875 5.4144 4.6875 5ZM2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H8.75C8.99864 9.0625 9.2371 9.16127 9.41291 9.33709C9.58873 9.5129 9.6875 9.75136 9.6875 10V26.25C9.6875 26.4986 9.58873 26.7371 9.41291 26.9129C9.2371 27.0887 8.99864 27.1875 8.75 27.1875H3.75C3.50136 27.1875 3.2629 27.0887 3.08709 26.9129C2.91127 26.7371 2.8125 26.4986 2.8125 26.25V10ZM4.6875 10.9375V25.3125H7.8125V10.9375H4.6875ZM11.5625 10C11.5625 9.75136 11.6613 9.5129 11.8371 9.33709C12.0129 9.16127 12.2514 9.0625 12.5 9.0625H17.5C17.7486 9.0625 17.9871 9.16127 18.1629 9.33709C18.3387 9.5129 18.4375 9.75136 18.4375 10V10.5425L18.9813 10.3088C19.9188 9.90825 20.9134 9.65729 21.9287 9.565C25.3975 9.25 28.4375 11.975 28.4375 15.475V26.25C28.4375 26.4986 28.3387 26.7371 28.1629 26.9129C27.9871 27.0887 27.7486 27.1875 27.5 27.1875H22.5C22.2514 27.1875 22.0129 27.0887 21.8371 26.9129C21.6613 26.7371 21.5625 26.4986 21.5625 26.25V17.5C21.5625 17.0856 21.3979 16.6882 21.1049 16.3951C20.8118 16.1021 20.4144 15.9375 20 15.9375C19.5856 15.9375 19.1882 16.1021 18.8951 16.3951C18.6021 16.6882 18.4375 17.0856 18.4375 17.5V26.25C18.4375 26.4986 18.3387 26.7371 18.1629 26.9129C17.9871 27.0887 17.7486 27.1875 17.5 27.1875H12.5C12.2514 27.1875 12.0129 27.0887 11.8371 26.9129C11.6613 26.7371 11.5625 26.4986 11.5625 26.25V10ZM13.4375 10.9375V25.3125H16.5625V17.5C16.5625 16.5883 16.9247 15.714 17.5693 15.0693C18.214 14.4247 19.0883 14.0625 20 14.0625C20.9117 14.0625 21.786 14.4247 22.4307 15.0693C23.0753 15.714 23.4375 16.5883 23.4375 17.5V25.3125H26.5625V15.475C26.5625 13.095 24.4862 11.215 22.1 11.4325C21.2802 11.5069 20.4771 11.7093 19.72 12.0325L17.87 12.8263C17.7273 12.8875 17.5716 12.9124 17.4169 12.8987C17.2623 12.8849 17.1134 12.8329 16.9838 12.7474C16.8541 12.6619 16.7478 12.5455 16.6742 12.4087C16.6007 12.272 16.5623 12.119 16.5625 11.9637V10.9375H13.4375Z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.885 8.125H21.8725M20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/elsa.jpg"
                  width="276"
                  height="326"
                  alt="Elsa - CEO manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    Elsa
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    CEO manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.1701 13.7599C12.1451 13.6149 9.8076 13.8537 8.6626 15.9724C7.5176 18.0912 8.67135 20.2962 9.3926 21.1337C10.1039 21.9174 12.3651 23.4012 14.7639 21.9524C15.3589 21.5937 16.1001 21.3249 16.9401 18.5187L16.8426 7.4762C16.6801 8.69245 18.0239 11.5449 21.8476 11.8824"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.25 1.5625C5.33832 1.5625 4.46398 1.92466 3.81932 2.56932C3.17466 3.21398 2.8125 4.08832 2.8125 5C2.8125 5.91168 3.17466 6.78602 3.81932 7.43068C4.46398 8.07534 5.33832 8.4375 6.25 8.4375C7.16168 8.4375 8.03602 8.07534 8.68068 7.43068C9.32534 6.78602 9.6875 5.91168 9.6875 5C9.6875 4.08832 9.32534 3.21398 8.68068 2.56932C8.03602 1.92466 7.16168 1.5625 6.25 1.5625ZM4.6875 5C4.6875 4.5856 4.85212 4.18817 5.14515 3.89515C5.43817 3.60212 5.8356 3.4375 6.25 3.4375C6.6644 3.4375 7.06183 3.60212 7.35485 3.89515C7.64788 4.18817 7.8125 4.5856 7.8125 5C7.8125 5.4144 7.64788 5.81183 7.35485 6.10485C7.06183 6.39788 6.6644 6.5625 6.25 6.5625C5.8356 6.5625 5.43817 6.39788 5.14515 6.10485C4.85212 5.81183 4.6875 5.4144 4.6875 5ZM2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H8.75C8.99864 9.0625 9.2371 9.16127 9.41291 9.33709C9.58873 9.5129 9.6875 9.75136 9.6875 10V26.25C9.6875 26.4986 9.58873 26.7371 9.41291 26.9129C9.2371 27.0887 8.99864 27.1875 8.75 27.1875H3.75C3.50136 27.1875 3.2629 27.0887 3.08709 26.9129C2.91127 26.7371 2.8125 26.4986 2.8125 26.25V10ZM4.6875 10.9375V25.3125H7.8125V10.9375H4.6875ZM11.5625 10C11.5625 9.75136 11.6613 9.5129 11.8371 9.33709C12.0129 9.16127 12.2514 9.0625 12.5 9.0625H17.5C17.7486 9.0625 17.9871 9.16127 18.1629 9.33709C18.3387 9.5129 18.4375 9.75136 18.4375 10V10.5425L18.9813 10.3088C19.9188 9.90825 20.9134 9.65729 21.9287 9.565C25.3975 9.25 28.4375 11.975 28.4375 15.475V26.25C28.4375 26.4986 28.3387 26.7371 28.1629 26.9129C27.9871 27.0887 27.7486 27.1875 27.5 27.1875H22.5C22.2514 27.1875 22.0129 27.0887 21.8371 26.9129C21.6613 26.7371 21.5625 26.4986 21.5625 26.25V17.5C21.5625 17.0856 21.3979 16.6882 21.1049 16.3951C20.8118 16.1021 20.4144 15.9375 20 15.9375C19.5856 15.9375 19.1882 16.1021 18.8951 16.3951C18.6021 16.6882 18.4375 17.0856 18.4375 17.5V26.25C18.4375 26.4986 18.3387 26.7371 18.1629 26.9129C17.9871 27.0887 17.7486 27.1875 17.5 27.1875H12.5C12.2514 27.1875 12.0129 27.0887 11.8371 26.9129C11.6613 26.7371 11.5625 26.4986 11.5625 26.25V10ZM13.4375 10.9375V25.3125H16.5625V17.5C16.5625 16.5883 16.9247 15.714 17.5693 15.0693C18.214 14.4247 19.0883 14.0625 20 14.0625C20.9117 14.0625 21.786 14.4247 22.4307 15.0693C23.0753 15.714 23.4375 16.5883 23.4375 17.5V25.3125H26.5625V15.475C26.5625 13.095 24.4862 11.215 22.1 11.4325C21.2802 11.5069 20.4771 11.7093 19.72 12.0325L17.87 12.8263C17.7273 12.8875 17.5716 12.9124 17.4169 12.8987C17.2623 12.8849 17.1134 12.8329 16.9838 12.7474C16.8541 12.6619 16.7478 12.5455 16.6742 12.4087C16.6007 12.272 16.5623 12.119 16.5625 11.9637V10.9375H13.4375Z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.885 8.125H21.8725M20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/michael.jpg"
                  width="276"
                  height="326"
                  alt="Michael - Content manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    Michael
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    Content manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.1701 13.7599C12.1451 13.6149 9.8076 13.8537 8.6626 15.9724C7.5176 18.0912 8.67135 20.2962 9.3926 21.1337C10.1039 21.9174 12.3651 23.4012 14.7639 21.9524C15.3589 21.5937 16.1001 21.3249 16.9401 18.5187L16.8426 7.4762C16.6801 8.69245 18.0239 11.5449 21.8476 11.8824"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.25 1.5625C5.33832 1.5625 4.46398 1.92466 3.81932 2.56932C3.17466 3.21398 2.8125 4.08832 2.8125 5C2.8125 5.91168 3.17466 6.78602 3.81932 7.43068C4.46398 8.07534 5.33832 8.4375 6.25 8.4375C7.16168 8.4375 8.03602 8.07534 8.68068 7.43068C9.32534 6.78602 9.6875 5.91168 9.6875 5C9.6875 4.08832 9.32534 3.21398 8.68068 2.56932C8.03602 1.92466 7.16168 1.5625 6.25 1.5625ZM4.6875 5C4.6875 4.5856 4.85212 4.18817 5.14515 3.89515C5.43817 3.60212 5.8356 3.4375 6.25 3.4375C6.6644 3.4375 7.06183 3.60212 7.35485 3.89515C7.64788 4.18817 7.8125 4.5856 7.8125 5C7.8125 5.4144 7.64788 5.81183 7.35485 6.10485C7.06183 6.39788 6.6644 6.5625 6.25 6.5625C5.8356 6.5625 5.43817 6.39788 5.14515 6.10485C4.85212 5.81183 4.6875 5.4144 4.6875 5ZM2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H8.75C8.99864 9.0625 9.2371 9.16127 9.41291 9.33709C9.58873 9.5129 9.6875 9.75136 9.6875 10V26.25C9.6875 26.4986 9.58873 26.7371 9.41291 26.9129C9.2371 27.0887 8.99864 27.1875 8.75 27.1875H3.75C3.50136 27.1875 3.2629 27.0887 3.08709 26.9129C2.91127 26.7371 2.8125 26.4986 2.8125 26.25V10ZM4.6875 10.9375V25.3125H7.8125V10.9375H4.6875ZM11.5625 10C11.5625 9.75136 11.6613 9.5129 11.8371 9.33709C12.0129 9.16127 12.2514 9.0625 12.5 9.0625H17.5C17.7486 9.0625 17.9871 9.16127 18.1629 9.33709C18.3387 9.5129 18.4375 9.75136 18.4375 10V10.5425L18.9813 10.3088C19.9188 9.90825 20.9134 9.65729 21.9287 9.565C25.3975 9.25 28.4375 11.975 28.4375 15.475V26.25C28.4375 26.4986 28.3387 26.7371 28.1629 26.9129C27.9871 27.0887 27.7486 27.1875 27.5 27.1875H22.5C22.2514 27.1875 22.0129 27.0887 21.8371 26.9129C21.6613 26.7371 21.5625 26.4986 21.5625 26.25V17.5C21.5625 17.0856 21.3979 16.6882 21.1049 16.3951C20.8118 16.1021 20.4144 15.9375 20 15.9375C19.5856 15.9375 19.1882 16.1021 18.8951 16.3951C18.6021 16.6882 18.4375 17.0856 18.4375 17.5V26.25C18.4375 26.4986 18.3387 26.7371 18.1629 26.9129C17.9871 27.0887 17.7486 27.1875 17.5 27.1875H12.5C12.2514 27.1875 12.0129 27.0887 11.8371 26.9129C11.6613 26.7371 11.5625 26.4986 11.5625 26.25V10ZM13.4375 10.9375V25.3125H16.5625V17.5C16.5625 16.5883 16.9247 15.714 17.5693 15.0693C18.214 14.4247 19.0883 14.0625 20 14.0625C20.9117 14.0625 21.786 14.4247 22.4307 15.0693C23.0753 15.714 23.4375 16.5883 23.4375 17.5V25.3125H26.5625V15.475C26.5625 13.095 24.4862 11.215 22.1 11.4325C21.2802 11.5069 20.4771 11.7093 19.72 12.0325L17.87 12.8263C17.7273 12.8875 17.5716 12.9124 17.4169 12.8987C17.2623 12.8849 17.1134 12.8329 16.9838 12.7474C16.8541 12.6619 16.7478 12.5455 16.6742 12.4087C16.6007 12.272 16.5623 12.119 16.5625 11.9637V10.9375H13.4375Z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.885 8.125H21.8725M20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/nicky.jpg"
                  width="276"
                  height="326"
                  alt="Nicky - PR manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    Nicky
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    PR manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.1701 13.7599C12.1451 13.6149 9.8076 13.8537 8.6626 15.9724C7.5176 18.0912 8.67135 20.2962 9.3926 21.1337C10.1039 21.9174 12.3651 23.4012 14.7639 21.9524C15.3589 21.5937 16.1001 21.3249 16.9401 18.5187L16.8426 7.4762C16.6801 8.69245 18.0239 11.5449 21.8476 11.8824"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.25 1.5625C5.33832 1.5625 4.46398 1.92466 3.81932 2.56932C3.17466 3.21398 2.8125 4.08832 2.8125 5C2.8125 5.91168 3.17466 6.78602 3.81932 7.43068C4.46398 8.07534 5.33832 8.4375 6.25 8.4375C7.16168 8.4375 8.03602 8.07534 8.68068 7.43068C9.32534 6.78602 9.6875 5.91168 9.6875 5C9.6875 4.08832 9.32534 3.21398 8.68068 2.56932C8.03602 1.92466 7.16168 1.5625 6.25 1.5625ZM4.6875 5C4.6875 4.5856 4.85212 4.18817 5.14515 3.89515C5.43817 3.60212 5.8356 3.4375 6.25 3.4375C6.6644 3.4375 7.06183 3.60212 7.35485 3.89515C7.64788 4.18817 7.8125 4.5856 7.8125 5C7.8125 5.4144 7.64788 5.81183 7.35485 6.10485C7.06183 6.39788 6.6644 6.5625 6.25 6.5625C5.8356 6.5625 5.43817 6.39788 5.14515 6.10485C4.85212 5.81183 4.6875 5.4144 4.6875 5ZM2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H8.75C8.99864 9.0625 9.2371 9.16127 9.41291 9.33709C9.58873 9.5129 9.6875 9.75136 9.6875 10V26.25C9.6875 26.4986 9.58873 26.7371 9.41291 26.9129C9.2371 27.0887 8.99864 27.1875 8.75 27.1875H3.75C3.50136 27.1875 3.2629 27.0887 3.08709 26.9129C2.91127 26.7371 2.8125 26.4986 2.8125 26.25V10ZM4.6875 10.9375V25.3125H7.8125V10.9375H4.6875ZM11.5625 10C11.5625 9.75136 11.6613 9.5129 11.8371 9.33709C12.0129 9.16127 12.2514 9.0625 12.5 9.0625H17.5C17.7486 9.0625 17.9871 9.16127 18.1629 9.33709C18.3387 9.5129 18.4375 9.75136 18.4375 10V10.5425L18.9813 10.3088C19.9188 9.90825 20.9134 9.65729 21.9287 9.565C25.3975 9.25 28.4375 11.975 28.4375 15.475V26.25C28.4375 26.4986 28.3387 26.7371 28.1629 26.9129C27.9871 27.0887 27.7486 27.1875 27.5 27.1875H22.5C22.2514 27.1875 22.0129 27.0887 21.8371 26.9129C21.6613 26.7371 21.5625 26.4986 21.5625 26.25V17.5C21.5625 17.0856 21.3979 16.6882 21.1049 16.3951C20.8118 16.1021 20.4144 15.9375 20 15.9375C19.5856 15.9375 19.1882 16.1021 18.8951 16.3951C18.6021 16.6882 18.4375 17.0856 18.4375 17.5V26.25C18.4375 26.4986 18.3387 26.7371 18.1629 26.9129C17.9871 27.0887 17.7486 27.1875 17.5 27.1875H12.5C12.2514 27.1875 12.0129 27.0887 11.8371 26.9129C11.6613 26.7371 11.5625 26.4986 11.5625 26.25V10ZM13.4375 10.9375V25.3125H16.5625V17.5C16.5625 16.5883 16.9247 15.714 17.5693 15.0693C18.214 14.4247 19.0883 14.0625 20 14.0625C20.9117 14.0625 21.786 14.4247 22.4307 15.0693C23.0753 15.714 23.4375 16.5883 23.4375 17.5V25.3125H26.5625V15.475C26.5625 13.095 24.4862 11.215 22.1 11.4325C21.2802 11.5069 20.4771 11.7093 19.72 12.0325L17.87 12.8263C17.7273 12.8875 17.5716 12.9124 17.4169 12.8987C17.2623 12.8849 17.1134 12.8329 16.9838 12.7474C16.8541 12.6619 16.7478 12.5455 16.6742 12.4087C16.6007 12.272 16.5623 12.119 16.5625 11.9637V10.9375H13.4375Z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 15C3.125 9.4025 3.125 6.6025 4.86375 4.86375C6.6025 3.125 9.40125 3.125 15 3.125C20.5975 3.125 23.3975 3.125 25.1362 4.86375C26.875 6.6025 26.875 9.40125 26.875 15C26.875 20.5975 26.875 23.3975 25.1362 25.1362C23.3975 26.875 20.5988 26.875 15 26.875C9.4025 26.875 6.6025 26.875 4.86375 25.1362C3.125 23.3975 3.125 20.5988 3.125 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.885 8.125H21.8725M20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
