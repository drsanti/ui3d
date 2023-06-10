
/**
 * Disable the SSR
 */

export async function handle({ request, resolve }: {
	request: Request;
	resolve: (request: Request) => Response | Promise<Response>;
}): Promise<Response> {
	return resolve(request);
}