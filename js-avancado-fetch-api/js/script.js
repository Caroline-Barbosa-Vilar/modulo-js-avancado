document.getElementById('draw-card').addEventListener('click', () => {
  drawACard();
})

async function createShuffledDeck() {
  const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  const response = await fetch(url);
  return await response.json();
}

async function takeACard(deck_id) {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
  const response = await fetch(url);
  return await response.json();
}

async function drawACard() {
  const deck = await createShuffledDeck();
  const card = await takeACard(deck.deck_id);
  const image = card.cards[0].image;
  document.getElementById('card').src = image;
}
drawACard();