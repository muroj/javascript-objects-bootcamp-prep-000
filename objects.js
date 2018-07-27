playlist = { "Bethel": "It Is Well"}

function updatePlaylist(toUpdate, artist, song) {
  toUpdate[artist] = song
  return toUpdate
}

function removeFromPlaylist(toUpdate, artist) {
  delete toUpdate[artist]
  return toUpdate
}