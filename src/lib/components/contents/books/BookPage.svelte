<script>
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import { setContext } from 'svelte';
	import bookContextKey from './bookContextKey';
	import BookFooterQna from './BookFooterQna.svelte';

	export let book = {
		id: 0,
		image: '',
		subject: '',
		title: '',
		subtitle: '',
		theme: {
			bg: '#fff',
			body: '#000',
			primary: '#f00',
			secondary: '#0f0'
		}
	};

	setContext(bookContextKey, book);
</script>

<div class="tw-bg-slate-800 tw-text-slate-400 tw-py-20">
	<NarrowContainer>
		<h1 class="tw-text-white tw-mb-4">Lorem ipsum dolor sit amet!</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore adipisci accusamus
			maiores libero, ipsa rerum saepe pariatur sapiente amet, deserunt officiis! Dolorem deserunt
			reiciendis possimus? Cum nulla ipsa culpa!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt magni id! A, minus
			impedit omnis quia dolorum sit natus dolor voluptas earum vitae veritatis ducimus molestias
			dolores sequi fugit deleniti facere aliquam modi. Harum ullam eos et minus voluptas, eaque
			similique quis minima aliquam quidem assumenda. Odio quod modi provident? Odit aperiam quia
			optio exercitationem magni quod iusto, dolor quidem non itaque corrupti delectus consequatur
			debitis placeat! Quo dolores autem, dicta explicabo omnis esse quam accusamus id molestias
			magnam!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perferendis quasi tempora
			similique assumenda magni qui. Voluptas, quo? Cumque consequatur vero tempora accusantium,
			laborum deserunt saepe, totam reprehenderit, voluptatum autem atque ea repellendus. Porro
			ratione optio fugit a dolores nam nobis? Delectus doloribus molestias, voluptates rerum enim
			perferendis, quisquam ex numquam nostrum natus deleniti pariatur quasi mollitia incidunt iste
			sed dolore minima quam quos nam vel? Cumque iste porro commodi eligendi asperiores fuga
			tempore tempora facere reiciendis neque quibusdam quam quas voluptas, ea nihil odit explicabo.
			Iure cupiditate sunt voluptate amet vitae laudantium commodi autem maxime qui minima impedit
			repellendus sit veniam, modi asperiores in voluptatibus dolor quod rem dolorem doloremque
			eligendi! Iure reprehenderit fugit accusamus animi. Voluptatem, ipsa! Repudiandae nulla
			reiciendis maxime veritatis natus ipsa vel tempore quod rerum facere. Mollitia officiis
			inventore modi eaque corporis quasi reprehenderit? Modi deleniti in praesentium. Repellendus,
			veritatis velit. Soluta sunt dolore natus similique eligendi ipsa nihil veritatis voluptates
			earum dolor! Ex consequatur nemo minima itaque quod nostrum illo harum necessitatibus fuga.
			Voluptates asperiores nostrum facere quis dolores debitis, hic error veritatis corrupti esse
			consequuntur cupiditate, saepe maiores deleniti. Accusantium repudiandae eaque consequuntur
			mollitia incidunt tenetur ipsa quia id. Consequuntur magnam nam totam possimus minus maxime
			libero culpa recusandae. Molestiae enim minus provident culpa, quis labore libero itaque
			quibusdam repellendus quam eius minima? Repellendus, nemo, deleniti aut voluptate a dolorum
			veniam veritatis delectus quia neque vel necessitatibus esse non? Nam mollitia quam harum
			eaque voluptate blanditiis cum! Exercitationem harum dolorum consectetur labore blanditiis
			iure omnis, rem nesciunt, dolores ex a. Eligendi reprehenderit, quia iure sed delectus, itaque
			aliquam dolor fugit ex dolores dolorum placeat consequuntur temporibus laudantium perspiciatis
			nisi ad animi necessitatibus facere culpa illum. Quod mollitia ipsa nisi ratione deleniti
			officiis ab iure nihil quibusdam excepturi ipsam a corrupti, placeat perspiciatis sunt.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae illo modi harum
			officiis? Dolores illum molestias inventore tempore a dolore nobis odit doloremque, deleniti
			odio exercitationem saepe fuga repudiandae rerum. Quaerat nam numquam iste distinctio? Sit,
			soluta vel! Illum illo sunt delectus qui quos, nobis dolorem tempora, molestiae, ullam ex
			distinctio vero corporis quis. Obcaecati minima totam excepturi suscipit et consectetur ipsum
			repellendus, sapiente corrupti eligendi unde modi repellat odit nostrum, temporibus nihil iure
			ratione nesciunt itaque exercitationem quo aspernatur qui impedit? Vel, explicabo. Atque, vel,
			earum mollitia deserunt voluptatibus et, a molestias rem omnis sint officia nihil repudiandae.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore adipisci accusamus
			maiores libero, ipsa rerum saepe pariatur sapiente amet, deserunt officiis! Dolorem deserunt
			reiciendis possimus? Cum nulla ipsa culpa!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt magni id! A, minus
			impedit omnis quia dolorum sit natus dolor voluptas earum vitae veritatis ducimus molestias
			dolores sequi fugit deleniti facere aliquam modi. Harum ullam eos et minus voluptas, eaque
			similique quis minima aliquam quidem assumenda. Odio quod modi provident? Odit aperiam quia
			optio exercitationem magni quod iusto, dolor quidem non itaque corrupti delectus consequatur
			debitis placeat! Quo dolores autem, dicta explicabo omnis esse quam accusamus id molestias
			magnam!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perferendis quasi tempora
			similique assumenda magni qui. Voluptas, quo? Cumque consequatur vero tempora accusantium,
			laborum deserunt saepe, totam reprehenderit, voluptatum autem atque ea repellendus. Porro
			ratione optio fugit a dolores nam nobis? Delectus doloribus molestias, voluptates rerum enim
			perferendis, quisquam ex numquam nostrum natus deleniti pariatur quasi mollitia incidunt iste
			sed dolore minima quam quos nam vel? Cumque iste porro commodi eligendi asperiores fuga
			tempore tempora facere reiciendis neque quibusdam quam quas voluptas, ea nihil odit explicabo.
			Iure cupiditate sunt voluptate amet vitae laudantium commodi autem maxime qui minima impedit
			repellendus sit veniam, modi asperiores in voluptatibus dolor quod rem dolorem doloremque
			eligendi! Iure reprehenderit fugit accusamus animi. Voluptatem, ipsa! Repudiandae nulla
			reiciendis maxime veritatis natus ipsa vel tempore quod rerum facere. Mollitia officiis
			inventore modi eaque corporis quasi reprehenderit? Modi deleniti in praesentium. Repellendus,
			veritatis velit. Soluta sunt dolore natus similique eligendi ipsa nihil veritatis voluptates
			earum dolor! Ex consequatur nemo minima itaque quod nostrum illo harum necessitatibus fuga.
			Voluptates asperiores nostrum facere quis dolores debitis, hic error veritatis corrupti esse
			consequuntur cupiditate, saepe maiores deleniti. Accusantium repudiandae eaque consequuntur
			mollitia incidunt tenetur ipsa quia id. Consequuntur magnam nam totam possimus minus maxime
			libero culpa recusandae. Molestiae enim minus provident culpa, quis labore libero itaque
			quibusdam repellendus quam eius minima? Repellendus, nemo, deleniti aut voluptate a dolorum
			veniam veritatis delectus quia neque vel necessitatibus esse non? Nam mollitia quam harum
			eaque voluptate blanditiis cum! Exercitationem harum dolorum consectetur labore blanditiis
			iure omnis, rem nesciunt, dolores ex a. Eligendi reprehenderit, quia iure sed delectus, itaque
			aliquam dolor fugit ex dolores dolorum placeat consequuntur temporibus laudantium perspiciatis
			nisi ad animi necessitatibus facere culpa illum. Quod mollitia ipsa nisi ratione deleniti
			officiis ab iure nihil quibusdam excepturi ipsam a corrupti, placeat perspiciatis sunt.
		</p>
		<h1 class="tw-text-white tw-mb-4">Lorem ipsum dolor sit amet.</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae illo modi harum
			officiis? Dolores illum molestias inventore tempore a dolore nobis odit doloremque, deleniti
			odio exercitationem saepe fuga repudiandae rerum. Quaerat nam numquam iste distinctio? Sit,
			soluta vel! Illum illo sunt delectus qui quos, nobis dolorem tempora, molestiae, ullam ex
			distinctio vero corporis quis. Obcaecati minima totam excepturi suscipit et consectetur ipsum
			repellendus, sapiente corrupti eligendi unde modi repellat odit nostrum, temporibus nihil iure
			ratione nesciunt itaque exercitationem quo aspernatur qui impedit? Vel, explicabo. Atque, vel,
			earum mollitia deserunt voluptatibus et, a molestias rem omnis sint officia nihil repudiandae.
		</p>
	</NarrowContainer>
</div>
<BookFooterQna />
