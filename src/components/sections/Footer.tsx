'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout'

interface FooterLink {
  label: string
  href: string
  icon?: string
}

interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export default function Footer() {
  const columns: FooterColumn[] = [
    {
      heading: 'COMPANY',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      heading: 'GROWTH AGENTS',
      links: [
        { label: 'Creator Sourcing', href: '#' },
        { label: 'Highlights', href: '#' },
        { label: 'Performance Media', href: '#' },
        { label: 'API/MCP Docs', href: '#' },
      ],
    },
    {
      heading: 'RESOURCES',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Webinars', href: '#' },
      ],
    },
    {
      heading: 'LEGAL',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
    {
      heading: 'FOLLOW US',
      links: [
        { label: '', href: '#', icon: '/images/icon/facebook.svg' },
        { label: '', href: '#', icon: '/images/icon/linkedin.svg' },
        { label: '', href: '#', icon: '/images/icon/instagram.svg' },
        { label: '', href: '#', icon: '/images/icon/twitter.svg' },
      ],
    },
  ]

  const thumbs = [
    '/images/footer/footer1.png',
    '/images/footer/footer2.png',
    '/images/footer/footer3.png',
    '/images/footer/footer4.png',
    '/images/footer/footer5.png',
  ]

  return (
    <footer className="relative bg-[#0a0f1e] pt-16 pb-24 overflow-hidden pt-[150px] pb-[150px]">
      <Container size="content" className="relative z-10">
        {/* Brand */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/logo-color.png"
            alt="Videofusion"
            width={220}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-white/80 mb-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold tracking-wide text-sm mb-4">{col.heading}</h4>
              {col.heading === 'FOLLOW US' ? (
                // Social Icons in horizontal line
                <div className="flex gap-4">
                  {col.links.map((link, index) => (
                    <Link key={index} href={link.href} className="text-white/70 hover:text-white transition-colors">
                      <Image src={link.icon!} alt="Social Icon" width={24} height={24} />
                    </Link>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/footer/awards.png"
            alt="Awards"
            width={520}
            height={120}
            className="h-auto w-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-center text-white/60 text-sm mb-8">Copyright @videofusion.io 2025</p>
      </Container>

      {/* Bottom filmstrip background - Masonry style with center curve gap */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 overflow-hidden" style={{ height: '387px' }}>
        {/* Left side masonry */}
        <div className="absolute left-0 top-0 bottom-0" style={{ width: '35%' }}>
          {[
            { src: thumbs[0], width: 120, height: 160, top: '0px', left: '10px', rotation: -3 },
            { src: thumbs[1], width: 140, height: 200, top: '20px', left: '140px', rotation: 2 },
            { src: thumbs[2], width: 100, height: 140, top: '40px', left: '290px', rotation: -5 },
            { src: thumbs[3], width: 130, height: 180, top: '170px', left: '20px', rotation: 4 },
            { src: thumbs[4], width: 110, height: 150, top: '190px', left: '160px', rotation: -2 },
            { src: thumbs[0], width: 135, height: 190, top: '230px', left: '280px', rotation: 6 },
            { src: thumbs[1], width: 105, height: 145, top: '360px', left: '30px', rotation: -4 },
            { src: thumbs[2], width: 125, height: 170, top: '350px', left: '150px', rotation: 3 },
          ].map((thumb, i) => (
            <div
              key={`left-${i}`}
              className="absolute"
              style={{
                top: thumb.top,
                left: thumb.left,
                transform: `rotate(${thumb.rotation}deg)`,
              }}
            >
              <Image
                src={thumb.src}
                alt="Video Thumbnail"
                width={thumb.width}
                height={thumb.height}
                className="rounded-xl shadow-lg object-cover opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Right side masonry */}
        <div className="absolute right-0 top-0 bottom-0" style={{ width: '35%' }}>
          {[
            { src: thumbs[3], width: 125, height: 175, top: '10px', left: '10px', rotation: 3 },
            { src: thumbs[4], width: 140, height: 195, top: '30px', left: '145px', rotation: -2 },
            { src: thumbs[0], width: 110, height: 155, top: '50px', left: '295px', rotation: 5 },
            { src: thumbs[1], width: 135, height: 185, top: '195px', left: '20px', rotation: -4 },
            { src: thumbs[2], width: 115, height: 160, top: '210px', left: '165px', rotation: 2 },
            { src: thumbs[3], width: 130, height: 180, top: '240px', left: '290px', rotation: -3 },
            { src: thumbs[4], width: 120, height: 165, top: '380px', left: '35px', rotation: 4 },
            { src: thumbs[0], width: 105, height: 145, top: '370px', left: '170px', rotation: -1 },
          ].map((thumb, i) => (
            <div
              key={`right-${i}`}
              className="absolute"
              style={{
                top: thumb.top,
                left: thumb.left,
                transform: `rotate(${thumb.rotation}deg)`,
              }}
            >
              <Image
                src={thumb.src}
                alt="Video Thumbnail"
                width={thumb.width}
                height={thumb.height}
                className="rounded-xl shadow-lg object-cover opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Center horizontal line of images */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex gap-4">
          {[
            { src: thumbs[0], width: 100, height: 140, rotation: 2 },
            { src: thumbs[1], width: 110, height: 155, rotation: -3 },
            { src: thumbs[2], width: 105, height: 145, rotation: 1 },
            { src: thumbs[3], width: 108, height: 150, rotation: -2 },
          ].map((thumb, i) => (
            <div
              key={`center-${i}`}
              style={{
                transform: `rotate(${thumb.rotation}deg)`,
              }}
            >
              <Image
                src={thumb.src}
                alt="Video Thumbnail"
                width={thumb.width}
                height={thumb.height}
                className="rounded-xl shadow-lg object-cover opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}


