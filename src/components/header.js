const Header = (title, date, temp) => { 
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let divHeader = document.createElement('div');
  divHeader.classList.add('header');

  let headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.textContent = `${date}`;

  let headerTitle = document.createElement('h1');
  headerTitle.textContent = `${title}`;

  let headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = `${temp}`;

  divHeader.appendChild(headerDate);
  divHeader.appendChild(headerTitle);
  divHeader.appendChild(headerTemp);

  return divHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

  // let headerContainer = document.querySelector('.header-container');
  // headerContainer.appendChild(divHeader);
}

export { Header, headerAppender }
