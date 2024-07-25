import "./message.scss";

function Message({ message }) {
  // destructuring message object
  const { text, type, origin, path } = message;

  return (
    <div className="message__text">
      {origin === "user" ? (
        <div className="message__prefix">
          <span className="message__prefix__tilde">~{path} </span>
          <span className="message__prefix__mark">&gt;</span>
        </div>
      ) : null}
      {type === "link" ? (
        <a
          className={`message__${type}`}
          href={text}
          target="_blank"
          rel="noreferrer"
        >
          {text.split("/")[text.split("/").length - 1]}
        </a>
      ) : type === "neofetch" ? (
        <div id="neofetch">
          <span className={`message__${type}`}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ lebulbasaur@portfolio
            <br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣿⣿⣿⣤⡀⢀⣤⣤⠀⢀⣠⣴⣶⣦⠀⠀{" "}
            <span className="message_white">-------------------------</span>
            <br />
            ⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣻⣿⣿⠀⠀{" "}
            <span className="message_yellow">Host:</span>{" "}
            <span className="message_white">Antoni Zaremba, 22yo</span>
            <br />
            ⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠟⠉⠉⠉⠉⠙⠛⠿⣿⣿⣿⣿⣟⣶⣾⡏⠀⠀{" "}
            <span className="message_yellow">Location:</span>{" "}
            <span className="message_white">Kraków, Poland</span>
            <br />
            ⠀⠀⠀⠀⢀⣼⡿⣻⡿⠔⠒⠓⠀⠀⠀⠀⠒⠒⢼⣿⣿⣿⢹⣟⣿⡄⠀⠀{" "}
            <span className="message_yellow">Current Role:</span>{" "}
            <span className="message_white">Student, 3rd year</span>
            <br />
            ⠀⠀⠀⣠⣾⣿⣿⣿⢁⣠⣀⣤⡀⠀⠀⠀⠄⣀⣀⡟⢿⣿⣾⣿⣿⣷⠀⠀{" "}
            <span className="message_yellow">Education:</span>{" "}
            <span className="message_white">BSc in Cybersec-Forensics</span>
            <br />
            ⠀⠀⠈⠉⠀⢸⣿⣯⠟⣁⣈⡙⠇⠀⠀⠐⠛⢫⠙⠻⣾⣿⣿⣽⡷⣽⠀⠀{" "}
            <span className="message_yellow">University:</span>{" "}
            <span className="message_white">AGH University</span>
            <br />
            ⠀⠀⠀⠀⠀⣨⣿⡿⢾⣷⣶⣿⠀⠀⠀⢠⣿⣤⣽⡄⠸⣿⡿⠿⢇⠈⢳⣆{" "}
            <span className="message_yellow">Profession:</span>{" "}
            <span className="message_white">IT technician</span>
            <br />
            ⠀⠀⠀⠀⢀⣗⢻⡇⠈⠛⠛⠁⠀⠀⠀⠈⠛⠻⠟⠁⢠⣿⣷⣴⡈⡇⠀⠁{" "}
            <span className="message_yellow">Skills:</span>{" "}
            <span className="message_white">JavaScript, Python, .NET,</span>
            <br />
            ⠀⠀⠀⠀⠈⢯⣹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡗⣱⠃⠀⠀{" "}
            <span className="message_white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React, Flask, SQL,
              Git
            </span>{" "}
            <br />
            ⠀⠀⠀⠀⠀⢰⣿⡟⣦⠀⠀⠀⠀⠲⠀⠀⠀⠀⠀⣰⣿⢿⣿⣿⠁⠀⠀⠀{" "}
            <span className="message_yellow">Languages:</span>{" "}
            <span className="message_white">Polish, English,</span>
            <br />
            ⠀⠀⠀⠀⠀⢸⣿⣧⣿⣷⢦⡀⠀⠀⠀⢀⣀⡤⢚⣿⣿⣾⠋⣿⠀⠀⠀⠀{" "}
            <span className="message_white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japanese,
              Russian (A1)
            </span>
            <br />
            ⠀⠀⠀⠀⠀⠸⠁⢿⡿⣿⣷⣌⡓⠒⠊⢉⣀⣴⣿⣿⡟⢿⠀⠈⠀⠀⠀⠀{" "}
            <span className="message_yellow">Interest:</span>{" "}
            <span className="message_white">AI and Cybersec</span>
            <br />
            ⠀⠀⠀⠀⠀⠀⠀⠸⠃⣸⣿⣿⣿⠀⣾⣿⣿⣿⣿⡿⣄⠀⠀⠀⠀⠀⠀⠀{" "}
            <span className="message_yellow">Hobby:</span>{" "}
            <span className="message_white">Trying different distros</span>
            <br />
            ⠀⠀⠀⠀⠀⠀⠀⢀⡔⢁⣿⣿⡿⣴⣿⣿⣿⣯⡾⠀⠈⢷⡄⠀⠀⠀⠀⠀{" "}
            <span className="message_white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collecting old thinkpads
            </span>
            <br />
            ⠀⠀⠀⠀⠀⠀⣰⠋⠀⣸⢿⣽⡿⠻⣿⣿⣿⣿⠇⠀⠀⠀⡿⣆⠀⠀⠀⠀{" "}
            <span className="message_white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, I'm a nerd
              ദ്ദി(⎚_⎚)
            </span>
            <br />
            ⠀⠀⠀⠀⠀⣼⠇⠀⣠⣿⣸⣿⣤⣴⣿⣿⣿⣿⠀⠀⠀⢰⠀⠘⡆⠀
            <br />
          </span>
          <div className="neofetch_color_blocks">
            <div className="neofetch_color_blocks_row">
              <div className="square_color square_color_red"></div>
              <div className="square_color square_color_aqua"></div>
              <div className="square_color square_color_yellow"></div>
              <div className="square_color square_color_purple"></div>
            </div>
            <div className="neofetch_color_blocks_row">
              <div className="square_color square_color_blue"></div>
              <div className="square_color square_color_green"></div>
              <div className="square_color square_color_orange"></div>
              <div className="square_color square_color_gray"></div>
            </div>
          </div>
        </div>
      ) : (
        <span className={`message__${type}`}>{text}</span>
      )}
    </div>
  );
}

export default Message;
