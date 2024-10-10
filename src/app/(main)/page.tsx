import { SecIntro } from '@/components/SecIntro';

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
					<h1>Hello world</h1>
				</div>
			</section>
		</main>
	);
};

export default Home;
