import Razorpay from 'razorpay';

const razorpay = new Razorpay({
	key_id: process.env.key_id!,
	key_secret: process.env.key_secret,
});

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	const { amount, currency } = (await request.json()) as {
		amount: string;
		currency: string;
	};

	var options = {
		amount: amount,
		currency: currency,
		receipt: 'rcp1',
	};
	const order = await razorpay.orders.create(options);
	console.log(order);
	return NextResponse.json({ orderId: order.id }, { status: 200 });
}
