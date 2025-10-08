import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 space-y-8 md:space-y-0 w-full">
          {/* Company Info */}
          <div>
            <h5 className="uppercase mb-4 font-bold">Company</h5>
            <ul>
              <li className="mt-2">
                <a href="/about" className="hover:underline text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="/contact" className="hover:underline text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li className="mt-2">
                <a href="/careers" className="hover:underline text-gray-600 hover:text-gray-800">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="uppercase mb-4 font-bold">Products</h5>
            <ul>
              <li className="mt-2">
                <a href="/products" className="hover:underline text-gray-600 hover:text-gray-800">
                  All Products
                </a>
              </li>
              <li className="mt-2">
                <a href="/pricing" className="hover:underline text-gray-600 hover:text-gray-800">
                  Pricing
                </a>
              </li>
              <li className="mt-2">
                <a href="/docs" className="hover:underline text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="uppercase mb-4 font-bold">Support</h5>
            <ul>
              <li className="mt-2">
                <a href="/help" className="hover:underline text-gray-600 hover:text-gray-800">
                  Help Center
                </a>
              </li>
              <li className="mt-2">
                <a href="/terms" className="hover:underline text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li className="mt-2">
                <a href="/privacy" className="hover:underline text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter (kept commented) */}
          {/*
          <div>
            <h5 className="uppercase mb-4 font-bold">Stay connected</h5>
            <div className="flex flex-col items-center">
              <Input type="email" placeholder="Enter your email" className="mb-2 w-56" />
              <Button>Subscribe</Button>
            </div>
          </div>
          */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-10 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} LexRam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
