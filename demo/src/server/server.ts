import { app, type LayoutData, MetaView } from '@rune-ts/server';
import { ClientRouter } from '../app/ClientRouter';

const server = app();

server.get(ClientRouter['/tutorials'].toString(), function (req, res) {
  const layoutData: LayoutData = {
    head: {
      title: '밋업',
      description: '',
    },
  };

  res.locals.layoutData = layoutData;

  res.send(
    new MetaView(
      ClientRouter['/tutorials']({}, { is_mobile: true }),
      res.locals.layoutData,
    ).toHtml(),
  );
});

server.get('/', (req, res) => {
  res.send('Hello, this is RUNE + RUNE Server!');
});
