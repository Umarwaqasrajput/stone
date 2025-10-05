export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center border-t border-orange-500 mt-10">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Stone Crushing Plant. All Rights Reserved.
      </p>
    </footer>
  );
}
