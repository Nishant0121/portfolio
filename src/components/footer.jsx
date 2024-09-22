import MyLogo from "./mylogo";

/* eslint-disable react/no-unknown-property */
export default function Footer() {
  return (
    <footer className="footer footer-center rounded-lg bg-blue-500 text-primary-content p-5">
      <aside>
        <MyLogo />

        <p className="font-bold">
          Nishnat
          <br />
          Providing reliable tech since 2023
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}
