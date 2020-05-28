import * as assert from 'assert';
import { $ } from '../src/miq';

describe('$', () => {
  beforeEach(() => {
    document.body.textContent = '';
    for (let i = 0; i < 6; i++) {
      const div = document.createElement('div');
      div.textContent = `item${i}`;
      document.body.appendChild(div);
    }
  });

  it('textContent one element', () => {
    $('div:first-child').textContent = 'hello';
    const divs = document.getElementsByTagName('div');
    assert.equal(divs[0].textContent, 'hello');
  });

  it('textContent all elements', () => {
    $('div').textContent = 'hello';
    assert.equal(document.body.textContent, 'hellohellohellohellohellohello');
  });

  // it('setAttribute all elements', () => {
  //   $('div').setAttribute('aria-label', 'List item');
  //   const divs = document.getElementsByTagName('div');
  //   assert.equal(divs[0].getAttribute('aria-label'), 'List item');
  //   assert.equal(divs[1].getAttribute('aria-label'), 'List item');
  //   assert.equal(divs[5].getAttribute('aria-label'), 'List item');
  // });

  it('filter', () => {
    $('div')
      .filter((el) => el.textContent == 'item1')
      .textContent = 'hello';
    assert.equal(document.body.textContent, 'hellohellohellohellohellohello');
  });
});
