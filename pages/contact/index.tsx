import Link from 'next/link';
import { MainLayout } from '../../components';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className='title'>
        {/* Ir a <a href='/'>Home</a> */}
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/contact/index.jsx</code>
      </p>
    </MainLayout>
  );
}
