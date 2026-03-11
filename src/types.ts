export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SonicBlast Pro Wireless',
    description: 'สัมผัสประสบการณ์เสียงอย่างที่ไม่เคยมีมาก่อนด้วย SonicBlast Pro มาพร้อมระบบตัดเสียงรบกวนแบบไฮบริดขั้นสูง ไดรเวอร์ขนาด 40 มม. ที่ปรับจูนมาเป็นพิเศษ และอายุการใช้งานแบตเตอรี่สูงสุด 60 ชั่วโมงต่อการชาร์จหนึ่งครั้ง ออกแบบมาสำหรับมืออาชีพที่ต้องการความชัดเจนและความสบาย',
    price: 299,
    originalPrice: 349,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAea6A7uMNoqKsqals1ONunIu8KJ0Zgn7u5VLeAs2lF25TPAKkY6xlfSLvsDtvLcsx2yqru-39Km5uwa_ypoEHQXjOlSSZhXU0NLXtuNfjiZEDe4LpsNvBIgSKBFzCW-ghaYurpfHxWbs22dMYD9qkUFA6daKGR81qnvkuEv6suW5GYtaoHQJheY_FTbzN3Js1TwwFjH6xJWHyQFMv0KsAARhjcktLg6Oye8XpnmXvY2uDTFeGDuDkwBcSCpAMTPJARJpCDwOOdfOQr',
    category: 'หูฟัง',
    rating: 4.5,
    reviews: 1248,
    inStock: true,
    features: [
      'โหมดฟังเสียงภายนอกแบบปรับตามสภาพแวดล้อม',
      'ระบบเสียงตามตำแหน่งส่วนบุคคล',
      'ชาร์จเร็วผ่าน USB-C (5 นาที = 3 ชั่วโมง)'
    ],
    specs: [
      { label: 'ระบบตัดเสียงรบกวน', value: 'ไฮบริด' },
      { label: 'แบตเตอรี่', value: '60 ชั่วโมง' },
      { label: 'บลูทูธ', value: '5.3' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLsGJ11DK-a8FcZkASsiQwsgaSNi9YvvfuRTjGIL3Y-5Tq-CXMipj4Z92AIePdK46CBwu1mLbALZbv_797ZOOnHdyu-PZNZA21S0ZaYe01IVckGARv3LqmluIzwpiVrrpJ8k1izGPXANp6l4oeFcifN7-NTtIvcn0lFfNQucdvbJmiQ62cm48OqzoWqT0XIXPGwny_NH5Atsb05RAJCW-XVYNQdfst9RFJ0FVuZg0RwWMecPicFpsPGFHYgsgteiB4jFT7VcSbDry',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhZ4P36xE08mbg8paSoobM9GybUTpbNDymeep0xNQDNr8YAmpjRtbNrox8u7CTqeuHXKCKQvrwDEp4EBYP9-_I49xN-ilYMrAv4S_YpepS6ZcL1DbgL12yh4BnDua1AqCwfl2T7CqHkdY3A4m7CS0Vppem7djvMyiNrkvfc6gY-xAw0rXYw7jByW37ybER6nxTaICz4YS7IXn52M7owYLjki8Yo9Ipv1xgLEsLcereUVypKaHwkm0JxAgBW8zVZlIqKZHYbZMB_Clh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTRsS-wciTAEedBJwxU_LVi2LDLF2R2oWZltx5wb4Jtb5iZTz4G47QuB0n3x7DgiddC-g8fnMG1fo_ossvvWfzgx-T6cQyNLG2FHwn0545eGXG-6PbIkYi_smSo_UDzSkxwGp0-zY80LFq5obkzzn-NcHirfpAAc3YFhl5pnDyTcZLZDj83WIsFuW0HJNVEOTRuqevnwStVtumblb0Okx8aIVeA7qvEy6zPDMKSVfvLQDHPYGL2WMGkBIqpAC-eGhaCUIpnGoTATFI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALaSAcfhE9OQ9N9-9jtcKGW3u6kTa71kn1XjY4xsCHFrLM-jToq9KIuG9cJlt_A_OFGwxJwwRu4TlWylFwMrpeAGUDqlnulLxxwTw1Zk0OQIOhs1CsdUu36MpQuICvk3Es4VL7b1kXhPhm8aCV1lQ2JmbtGsk8MBdmRiCCI-pGlf_0RTv6cJ_KMpJN6tve443K4h35eDntVVFWGwAuYKP-EI8DO3Fp14ddtzIDgqcjocyWxT-ovwp3jVVVI8P_PKIo_ni5LQ3iqpUY'
    ]
  },
  {
    id: '2',
    name: 'Acoustic Pro Headphones',
    description: 'หูฟังตัดเสียงรบกวนระดับพรีเมียมสำหรับการใช้งานในทุกๆ วัน ให้เสียงที่คมชัดและเบสที่หนักแน่น',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    category: 'หูฟัง',
    rating: 4.8,
    reviews: 850,
    inStock: true,
    features: ['ตัดเสียงรบกวน Active Noise Cancelling', 'แบตเตอรี่ 40 ชั่วโมง', 'รองรับ Hi-Res Audio'],
    specs: [],
    images: []
  },
  {
    id: '3',
    name: 'Vision Tab Ultra',
    description: 'แท็บเล็ตหน้าจอ Retina 12.9 นิ้วสำหรับมืออาชีพ',
    price: 799,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    category: 'โน้ตบุ๊ก',
    rating: 4.9,
    reviews: 420,
    inStock: true,
    features: [],
    specs: [],
    images: []
  },
  {
    id: '4',
    name: 'Swift Watch Series 5',
    description: 'สมาร์ทวอทช์ติดตามอัตราการเต้นของหัวใจ',
    price: 199,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    category: 'อุปกรณ์สวมใส่',
    rating: 4.7,
    reviews: 630,
    inStock: true,
    features: [],
    specs: [],
    images: []
  },
  {
    id: '5',
    name: 'Sonic Blast Speaker',
    description: 'ลำโพงพกพาเสียงรอบทิศทาง 360° กันน้ำระดับ IPX7',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1608156639585-34052e81c99f?auto=format&fit=crop&q=80&w=800',
    category: 'ลำโพง',
    rating: 4.6,
    reviews: 310,
    inStock: true,
    features: ['กันน้ำ IPX7', 'เสียง 360 องศา', 'แบตเตอรี่ 12 ชั่วโมง'],
    specs: [],
    images: []
  },
  {
    id: '6',
    name: 'Retro Vinyl Player',
    description: 'เครื่องเล่นแผ่นเสียงดีไซน์ย้อนยุคพร้อมระบบบลูทูธในตัว',
    price: 159,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800',
    category: 'เครื่องเสียงบ้าน',
    rating: 4.4,
    reviews: 150,
    inStock: true,
    features: ['รองรับ Bluetooth', 'ลำโพงในตัว', 'ดีไซน์วินเทจ'],
    specs: [],
    images: []
  },
  {
    id: '7',
    name: 'Studio Monitor X1',
    description: 'ลำโพงมอนิเตอร์สำหรับสตูดิโอ ให้เสียงที่เที่ยงตรงที่สุด',
    price: 450,
    image: 'https://images.unsplash.com/photo-1594106136608-28375003e24e?auto=format&fit=crop&q=80&w=800',
    category: 'ลำโพง',
    rating: 4.9,
    reviews: 85,
    inStock: true,
    features: ['เสียง Flat Response', 'กำลังขับ 100W', 'ช่องต่อ XLR/TRS'],
    specs: [],
    images: []
  },
  {
    id: '8',
    name: 'In-Ear Pro Buds',
    description: 'หูฟัง In-ear ไร้สายขนาดกะทัดรัดพร้อมระบบตัดเสียงรบกวน',
    price: 129,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    category: 'หูฟัง',
    rating: 4.3,
    reviews: 540,
    inStock: true,
    features: ['น้ำหนักเบา', 'เคสชาร์จไร้สาย', 'กันเหงื่อ'],
    specs: [],
    images: []
  }
];
