function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  return document.querySelector("#grand-node")
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = list.length; i < l; i++) {
    list[i].innerHTML = (i + n).toString()
  }
}
