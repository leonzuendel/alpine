import Alpine from 'alpinejs';
import mask from '@alpinejs/mask';

import counterController from './controllers/counterController';

window.Alpine = Alpine;

Alpine.plugin(mask);

Alpine.data('counter', counterController);

Alpine.start();

