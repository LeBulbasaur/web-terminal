import "./message.scss";
import parse from "react-html-parser";

function Message({ message }) {
  // destructuring message object
  const { text, type, origin, path } = message;

  return (
    <div className="message__text">
      {origin === "user" ? (
        <div className="message__prefix">
          <span className="message__prefix__text">root@zarant-term:</span>
          <span className="message__prefix__tilde">~{path}</span>
          <span className="message__prefix__mark">$</span>
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
        parseInt(text) > 767 ? (
          <div id="neofetch">
            <span className={`message__${type}`}>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ lebulbasaur@portfolio
              <br />
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣿⣿⣿⣤⡀⢀⣤⣤⠀⢀⣠⣴⣶⣦⠀⠀{" "}
              <span className="message__white">-------------------------</span>
              <br />
              ⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣻⣿⣿⠀⠀{" "}
              <span className="message__yellow">Host:</span>{" "}
              <span className="message__white">Antoni Zaremba, 22yo</span>
              <br />
              ⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠟⠉⠉⠉⠉⠙⠛⠿⣿⣿⣿⣿⣟⣶⣾⡏⠀⠀{" "}
              <span className="message__yellow">Location:</span>{" "}
              <span className="message__white">Kraków, Poland</span>
              <br />
              ⠀⠀⠀⠀⢀⣼⡿⣻⡿⠔⠒⠓⠀⠀⠀⠀⠒⠒⢼⣿⣿⣿⢹⣟⣿⡄⠀⠀{" "}
              <span className="message__yellow">Current Role:</span>{" "}
              <span className="message__white">Student, 3rd year</span>
              <br />
              ⠀⠀⠀⣠⣾⣿⣿⣿⢁⣠⣀⣤⡀⠀⠀⠀⠄⣀⣀⡟⢿⣿⣾⣿⣿⣷⠀⠀{" "}
              <span className="message__yellow">Education:</span>{" "}
              <span className="message__white">BSc in Cybersec-Forensics</span>
              <br />
              ⠀⠀⠈⠉⠀⢸⣿⣯⠟⣁⣈⡙⠇⠀⠀⠐⠛⢫⠙⠻⣾⣿⣿⣽⡷⣽⠀⠀{" "}
              <span className="message__yellow">University:</span>{" "}
              <span className="message__white">AGH University</span>
              <br />
              ⠀⠀⠀⠀⠀⣨⣿⡿⢾⣷⣶⣿⠀⠀⠀⢠⣿⣤⣽⡄⠸⣿⡿⠿⢇⠈⢳⣆{" "}
              <span className="message__yellow">Profession:</span>{" "}
              <span className="message__white">IT technician</span>
              <br />
              ⠀⠀⠀⠀⢀⣗⢻⡇⠈⠛⠛⠁⠀⠀⠀⠈⠛⠻⠟⠁⢠⣿⣷⣴⡈⡇⠀⠁{" "}
              <span className="message__yellow">Skills:</span>{" "}
              <span className="message__white">JavaScript, Python, .NET,</span>
              <br />
              ⠀⠀⠀⠀⠈⢯⣹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡗⣱⠃⠀⠀{" "}
              <span className="message__white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React, Flask,
                SQL, Git
              </span>{" "}
              <br />
              ⠀⠀⠀⠀⠀⢰⣿⡟⣦⠀⠀⠀⠀⠲⠀⠀⠀⠀⠀⣰⣿⢿⣿⣿⠁⠀⠀⠀{" "}
              <span className="message__yellow">Languages:</span>{" "}
              <span className="message__white">Polish, English,</span>
              <br />
              ⠀⠀⠀⠀⠀⢸⣿⣧⣿⣷⢦⡀⠀⠀⠀⢀⣀⡤⢚⣿⣿⣾⠋⣿⠀⠀⠀⠀{" "}
              <span className="message__white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japanese,
                Russian
              </span>
              <br />
              ⠀⠀⠀⠀⠀⠸⠁⢿⡿⣿⣷⣌⡓⠒⠊⢉⣀⣴⣿⣿⡟⢿⠀⠈⠀⠀⠀⠀{" "}
              <span className="message__yellow">Interest:</span>{" "}
              <span className="message__white">AI and Cybersec</span>
              <br />
              ⠀⠀⠀⠀⠀⠀⠀⠸⠃⣸⣿⣿⣿⠀⣾⣿⣿⣿⣿⡿⣄⠀⠀⠀⠀⠀⠀⠀{" "}
              <span className="message__yellow">Hobby:</span>{" "}
              <span className="message__white">Trying different distros</span>
              <br />
              ⠀⠀⠀⠀⠀⠀⠀⢀⡔⢁⣿⣿⡿⣴⣿⣿⣿⣯⡾⠀⠈⢷⡄⠀⠀⠀⠀⠀{" "}
              <span className="message__white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collecting old
                thinkpads
              </span>
              <br />
              ⠀⠀⠀⠀⠀⠀⣰⠋⠀⣸⢿⣽⡿⠻⣿⣿⣿⣿⠇⠀⠀⠀⡿⣆⠀⠀⠀⠀{" "}
              <span className="message__white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, I'm a nerd
                ദ്ദി(⎚_⎚)
              </span>
              <br />
              ⠀⠀⠀⠀⠀⣼⠇⠀⣠⣿⣸⣿⣤⣴⣿⣿⣿⣿⠀⠀⠀⢰⠀⠘⡆⠀
              <br />
            </span>
            <div
              className="neofetch_color_blocks"
              style={{ marginBottom: "1rem" }}
            >
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
          <div id="neofetch">
            <span className={`message__${type}`}>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              <br />
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣿⣿⣿⣤⡀⢀⣤⣤⠀⢀⣠⣴⣶⣦⠀⠀ <br />
              ⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣻⣿⣿⠀⠀ <br />
              ⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠟⠉⠉⠉⠉⠙⠛⠿⣿⣿⣿⣿⣟⣶⣾⡏⠀⠀ <br />
              ⠀⠀⠀⠀⢀⣼⡿⣻⡿⠔⠒⠓⠀⠀⠀⠀⠒⠒⢼⣿⣿⣿⢹⣟⣿⡄⠀⠀ <br />
              ⠀⠀⠀⣠⣾⣿⣿⣿⢁⣠⣀⣤⡀⠀⠀⠀⠄⣀⣀⡟⢿⣿⣾⣿⣿⣷⠀⠀ <br />
              ⠀⠀⠈⠉⠀⢸⣿⣯⠟⣁⣈⡙⠇⠀⠀⠐⠛⢫⠙⠻⣾⣿⣿⣽⡷⣽⠀⠀ <br />
              ⠀⠀⠀⠀⠀⣨⣿⡿⢾⣷⣶⣿⠀⠀⠀⢠⣿⣤⣽⡄⠸⣿⡿⠿⢇⠈⢳⣆ <br />
              ⠀⠀⠀⠀⢀⣗⢻⡇⠈⠛⠛⠁⠀⠀⠀⠈⠛⠻⠟⠁⢠⣿⣷⣴⡈⡇⠀⠁ <br />
              ⠀⠀⠀⠀⠈⢯⣹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡗⣱⠃⠀⠀ <br />
              ⠀⠀⠀⠀⠀⢰⣿⡟⣦⠀⠀⠀⠀⠲⠀⠀⠀⠀⠀⣰⣿⢿⣿⣿⠁⠀⠀⠀ <br />
              ⠀⠀⠀⠀⠀⢸⣿⣧⣿⣷⢦⡀⠀⠀⠀⢀⣀⡤⢚⣿⣿⣾⠋⣿⠀⠀⠀⠀ <br />
              ⠀⠀⠀⠀⠀⠸⠁⢿⡿⣿⣷⣌⡓⠒⠊⢉⣀⣴⣿⣿⡟⢿⠀⠈⠀⠀⠀⠀ <br />
              ⠀⠀⠀⠀⠀⠀⠀⠸⠃⣸⣿⣿⣿⠀⣾⣿⣿⣿⣿⡿⣄⠀⠀⠀⠀⠀⠀⠀ <br />
              ⠀⠀⠀⠀⠀⠀⠀⢀⡔⢁⣿⣿⡿⣴⣿⣿⣿⣯⡾⠀⠈⢷⡄⠀⠀⠀⠀⠀ <br />
              ⠀⠀⠀⠀⠀⠀⣰⠋⠀⣸⢿⣽⡿⠻⣿⣿⣿⣿⠇⠀⠀⠀⡿⣆⠀⠀⠀⠀ <br />
              ⠀⠀⠀⠀⠀⣼⠇⠀⣠⣿⣸⣿⣤⣴⣿⣿⣿⣿⠀⠀⠀⢰⠀⠘⡆⠀
            </span>
            <br />
            <br />
            lebulbasaur@portfolio
            <br />
            <span className="message__white">-------------------------</span>
            <br />
            <span className="message__yellow">Host:</span>{" "}
            <span className="message__white">Antoni Zaremba, 22yo</span>
            <br />
            <span className="message__yellow">Location:</span>{" "}
            <span className="message__white">Kraków, Poland</span>
            <br />
            <span className="message__yellow">Current Role:</span>{" "}
            <span className="message__white">Student, 3rd year</span>
            <br />
            <span className="message__yellow">Education:</span>{" "}
            <span className="message__white">Cybersec-Forensics BSc</span>
            <br />
            <span className="message__yellow">University:</span>{" "}
            <span className="message__white">AGH University</span>
            <br />
            <span className="message__yellow">Profession:</span>{" "}
            <span className="message__white">IT technician</span>
            <br />
            <span className="message__yellow">Skills:</span>{" "}
            <span className="message__white">JavaScript, Python, .NET,</span>
            <br />
            <span className="message__white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React, Flask, SQL,
              Git
            </span>{" "}
            <br />
            <span className="message__yellow">Languages:</span>{" "}
            <span className="message__white">Polish, English,</span>
            <br />
            <span className="message__white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japanese,
              Russian
            </span>
            <br />
            <span className="message__yellow">Interest:</span>{" "}
            <span className="message__white">AI and Cybersec</span>
            <br />
            <span className="message__yellow">Hobby:</span>{" "}
            <span className="message__white">Trying different distros</span>
            <br />
            <span className="message__white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collecting old thinkpads
            </span>
            <br />
            <span className="message__white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, I'm a nerd
              ദ്ദി(⎚_⎚)
            </span>
          </div>
        )
      ) : (
        <span className={`message message__${type}`}>{parse(text)}</span>
      )}
    </div>
  );
}

export default Message;
