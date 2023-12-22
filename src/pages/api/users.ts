import { NextRequest, NextResponse } from "next/server";

interface IUsersList {
	id: number,
	name: string
}

const GET = (request: NextRequest, response: NextResponse) => {
	const usersList: IUsersList[] = [
		{
			id: 1,
			name: "Matheus"
		},
		{
			id: 2,
			name: "Teste"
		}
	];

	//@ts-ignore
	return response.json(usersList);
}

export default GET;
