import { SecIntro } from '@/components/SecIntro';
import { polly_rounded } from '@/fonts/fonts';

const Home = () => {
	return (
		<main>
			<section>
				<div className="container-lg">
					<SecIntro.Root>
						<SecIntro.Group>
							<SecIntro.Title>Test</SecIntro.Title>
							<SecIntro.Subtitle>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</SecIntro.Subtitle>
						</SecIntro.Group>
					</SecIntro.Root>
				</div>
			</section>
			<section>
				<div className="container-lg">
					<h1 className={polly_rounded.className}>Hello world</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
						libero commodi porro suscipit eos dolores vero ipsum omnis repellat
						molestias, consequatur cumque ipsam perspiciatis alias quos nisi
						nemo quisquam quibusdam.
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
