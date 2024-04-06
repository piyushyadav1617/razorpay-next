import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
export default function PaymentVerifyPage() {
	return (
		<section className="min-h-[90vh] flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-40 ">
            <CheckCircle2 size={80} className='text-green-400 animate-pulse '/>
			<p className='text-2xl sm:text-4xl text-center '>Thank You for Purchasing our product</p>
			<Button asChild variant={'outline'} className='border-green-400 hover:bg-green-50 border-2 w-40'>
				<Link href={'/'}>Go to Home</Link>
			</Button>
		</section>
	);
}
