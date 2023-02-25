var elements = document.evaluate("//button/span[text()='Accept']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < elements.snapshotLength; i++) {
  var element = elements.snapshotItem(i);
  if (element) {
    setTimeout(function(el){el.click();}, i * 2000, element);
  }
}
