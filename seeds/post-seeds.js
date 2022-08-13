const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo. Arcu ac tortor dignissim convallis aenean et tortor at risus. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Cursus in hac habitasse platea dictumst quisque. Mattis vulputate enim nulla aliquet porttitor. Amet volutpat consequat mauris nunc congue nisi. Venenatis cras sed felis eget. Faucibus ornare suspendisse sed nisi. Elementum sagittis vitae et leo duis ut diam. Nunc sed augue lacus viverra vitae congue. Mattis enim ut tellus elementum sagittis. Egestas pretium aenean pharetra magna. Eget arcu dictum varius duis. Metus aliquam eleifend mi in nulla. Nullam ac tortor vitae purus faucibus ornare. Viverra orci sagittis eu volutpat odio. Non odio euismod lacinia at quis risus sed vulputate odio.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet audire splendide clita eteu mus vel arcu Ut antiopam consequat cursus est donec ut clita odio eleifend duo per vis te ius eleifend consequat his voluptua his duo consequat in odio habeo cursus takimata nec in vel duo cetero assentior ne facilisis.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'definiebas corrumpit tincidunt voluptua aliquyam justo aliquyam et partiendo ut antiopam iusto kasd sea consequat in aenean insolens Ut tincidunt officiis donec aliquyam per.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'ei pretium duo vel eleifend nec labore at assentior et est vel duo mei ut nec impedit cursus labore ullamcorper mauris aliquyam definiebas dicta ut vel uonsetetur eu clita duo penatibus arcu pretium imperdiet dicta his.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'voluptua splendide qui semper eu abhorreant leo sea nec vis ipsum at uonsetetur splendide rhoncus nec nullam habeo partiendo duo duo cetero vel vel est.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet definiebas Ut duo mea leo iusto abhorreant odio qui definiebas corrumpit clita abhorreant graeci sed inimicus nec donec Vulputate mei vis vel duo kasd semper audire temporibus ullamcorper uonsetetur labore nullam impedit usu Vulputate eleifend graeci pretium eu.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet sea qui kasd elementum adipisci sea audire facilisis pretium est mea nec dicunt labore.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet uonsetetur in usu consequat repudiandae vitae pretium dicunt nullam duo impedit graeci temporibus.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Lorem ipsum dolor sit amet cetero cursus definiebas repudiandae Vulputate consequat partiendo splendide takimata ullamcorper inimicus ne at cetero corpora est voluptua Vulputate aliquyam inimicus rhoncus aenean justo penatibus te usu aenean consequat eum kasd qui amet habeo Vulputate eam splendide clita imperdiet justo duo aliquyam justo ius duo.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Lorem ipsum dolor sit amet mei vis tincidunt duo aliquyam te corrumpit officiis corpora aliquyam officiis inimicus eleifend dicta duo ipsum temporibus eos usu et eam consequat antiopam usu.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet voluptua kasd vis leo labore corpora aliquyam officiis kasd ei.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Lorem ipsum dolor sit amet duo invidunt Vulputate invidunt ullamcorper impedit tincidunt assentior audire ut facilisi aliquyam repudiandae cetero vitae officiis nec justo consequat aliquam takimata.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Lorem ipsum dolor sit amet te partiendo inimicus at assentior voluptua ipsum donec cetero corrumpit mei aliquyam at his nec duo ne qui eam sed cetero ut facilisi insolens aenean per mus eos kasd imperdiet insolens partiendo usu.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Lorem ipsum dolor sit amet cetero antiopam habeo impedit vel nec invidunt donec aliquyam temporibus impedit his cetero est adipisci odio his aliquyam officiis repudiandae insolens usu duo nullam eos est facilisi his ius justo in pretium mei audire leo corrumpit iusto aliquam Ut semper rhoncus cetero consequat assentior cetero.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Lorem ipsum dolor sit amet eu ut Ut penatibus adipisci takimata temporibus at ei consequat qui imperdiet.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      content: 'Lorem ipsum dolor sit amet qui amet kasd duo kasd arcu semper pretium rhoncus eam splendide ei cursus facilisi usu aliquam eam audire labore mus kasd te vel repudiandae habeo aenean impedit.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet odio assentior Vulputate at kasd odio aenean eteu in consequat consequat inimicus eum.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Lorem ipsum dolor sit amet inimicus antiopam temporibus ius vitae penatibus his vis mea usu kasd sed nec assentior mus splendide corpora cursus usu sed.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Lorem ipsum dolor sit amet dicta aliquam insolens partiendo donec his inimicus takimata Vulputate semper elementum voluptua abhorreant eleifend eu mea usu nec mus splendide nullam Vulputate clita donec rhoncus odio invidunt inimicus tincidunt takimata.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Lorem ipsum dolor sit amet imperdiet kasd iusto vel usu nullam usu inimicus assentior his officiis uonsetetur kasd eos his at impedit.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
