import Link from "next/link";

const ContactNavbar = () => {
  return (
    <div className="bg-gray-50 border-b py-2 flex items-center justify-center gap-8">
      <Link href="" className="flex items-center">
        <div className="w-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
              stroke="#000000"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <p className="text-sm">+90 000 000 00 00</p>
      </Link>
      <div className="flex gap-3">
        <Link href="" className="flex items-center">
          <div className="w-5">
            <svg x="0px" y="0px" viewBox="0 0 512 512">
              <path
                fill="#1976D2"
                d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64  C512,28.704,483.296,0,448,0z"
              />
              <path
                fill="#FAFAFA"
                d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64  v176h96V336h48L432,256z"
              />
            </svg>
          </div>
        </Link>
        <Link href="" className="flex items-center">
          <div className="w-5">
            <svg
              // enable-background="new 0 0 24 24"
              // height="512"
              viewBox="0 0 24 24"
              // width="512"
            >
              <linearGradient
                id="SVGID_1_"
                gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                gradientUnits="userSpaceOnUse"
                x1="-37.106"
                x2="-26.555"
                y1="-72.705"
                y2="-84.047"
              >
                <stop offset="0" stopColor="#fd5" />
                <stop offset=".5" stopColor="#ff543e" />
                <stop offset="1" stopColor="#c837ab" />
              </linearGradient>
              <path
                d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
                fill="url(#SVGID_1_)"
              />
              <path
                d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                fill="#fff"
              />
            </svg>
          </div>
        </Link>
        <Link href="" className="flex items-center">
          <div className="w-5">
            <svg viewBox="0 0 64 64">
              <g fillRule="evenodd">
                <path
                  d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16"
                  fill="#2d0f1e"
                />
                <path
                  d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30"
                  fill="#501432"
                />
                <path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" />
                <path
                  d="m34 14a1.9994 1.9994 0 0 1 2-2h4.229a2 2 0 0 1 1.961 1.609 7.9559 7.9559 0 0 0 7.81 6.391 1.9994 1.9994 0 0 1 2 2v4a1.9994 1.9994 0 0 1 -2 2 15.9169 15.9169 0 0 1 -8-2.143v16.143a13.9993 13.9993 0 1 1 -14-14 1.9994 1.9994 0 0 1 2 2v4a1.9994 1.9994 0 0 1 -2 2 6.0005 6.0005 0 1 0 6 6z"
                  fill="#fe2c55"
                />
                <path
                  d="m32 12a1.9994 1.9994 0 0 1 2-2h4.229a2 2 0 0 1 1.961 1.609 7.9559 7.9559 0 0 0 7.81 6.391 1.9994 1.9994 0 0 1 2 2v4a1.9994 1.9994 0 0 1 -2 2 15.9169 15.9169 0 0 1 -8-2.143v16.143a13.9993 13.9993 0 1 1 -14-14 1.9994 1.9994 0 0 1 2 2v4a1.9994 1.9994 0 0 1 -2 2 6.0005 6.0005 0 1 0 6 6z"
                  fill="#25f4ee"
                />
                <path
                  d="m22.876 45.124a6.0005 6.0005 0 0 0 11.124-3.124v-28a1.9994 1.9994 0 0 1 2-2h4.229c.017 0 .033 0 .049.001a7.9381 7.9381 0 0 0 3.173 4.577 7.9586 7.9586 0 0 0 6.549 3.422v4a1.9994 1.9994 0 0 1 -2 2 15.9169 15.9169 0 0 1 -8-2.143v16.143a14 14 0 0 1 -22.849 10.849 14.0007 14.0007 0 0 1 10.849-22.849v4a1.9994 1.9994 0 0 1 -2 2 6.0009 6.0009 0 0 0 -3.124 11.124z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </Link>
        <Link href="" className="flex items-center">
          <div className="w-5">
            <svg viewBox="0 0 64 64">
              <g fillRule="evenodd">
                <path
                  d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16"
                  fill="#f00"
                />
                <path
                  d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30"
                  fill="#ff5a51"
                />
                <path
                  d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16"
                  fill="#d5002c"
                />
                <path
                  d="m25.048 17.876a1.9994 1.9994 0 0 0 -3.048 1.703v24.842a1.9994 1.9994 0 0 0 3.048 1.703c5.099-3.137 15.279-9.402 20.184-12.421a1.9992 1.9992 0 0 0 0-3.406c-4.905-3.019-15.085-9.284-20.184-12.421z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactNavbar;
