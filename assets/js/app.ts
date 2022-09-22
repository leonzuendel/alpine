import Alpine from 'alpinejs';
import mask from '@alpinejs/mask';

import counter from './controllers/counterController';
import todo from './controllers/todoController';

// @ts-ignore
window.Alpine = Alpine

Alpine.plugin(mask);

Alpine.data('counter', counter);
Alpine.data('todo', todo);

Alpine.start();

