import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Quote,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  const asciiName = `
  _|_|    _|      _|  _|_|_|      _|_|    _|_|_|      _|_|_|  
_|    _|    _|  _|    _|    _|  _|    _|  _|    _|  _|        
_|_|_|_|      _|      _|_|_|    _|_|_|_|  _|_|_|      _|_|    
_|    _|      _|      _|    _|  _|    _|  _|    _|        _|  
_|    _|      _|      _|_|_|    _|    _|  _|    _|  _|_|_| 
  


_|      _|    _|_|    _|_|_|_|_|  _|_|_|    _|_|_|  _|_|_|  
  _|  _|    _|    _|        _|      _|    _|          _|    
    _|      _|_|_|_|      _|        _|    _|          _|    
    _|      _|    _|    _|          _|    _|          _|    
    _|      _|    _|  _|_|_|_|_|  _|_|_|    _|_|_|  _|_|_|  
  `;

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>{asciiName}</PreName>
        <PreWrapper>
          <PreNameMobile>{asciiName}</PreNameMobile>
        </PreWrapper>
        <div>Welcome to my portfolio!</div>
        <Seperator>----</Seperator>

        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <div>
          <Quote>
            "One day, in retrospect, the years of struggle will strike you as
            the most beautiful." <br /> - Sigmund Freud.
          </Quote>
        </div>
      </div>
      {/* <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div> */}
    </HeroContainer>
  );
};

export default Welcome;
