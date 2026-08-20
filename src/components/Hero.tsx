import { ScrollLink } from "./ScrollLink";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__name">Mohammed Amaan Khan</p>
          <p className="hero__eyebrow">Game Developer</p>

          <h1 className="hero__title" id="hero-title">
            Building games and designing the systems that make them work.
          </h1>

          <p className="hero__supporting">
            I build in Unity and C#, working across gameplay programming,
            mechanics, and level design. I&apos;m especially interested in the
            decisions that connect a game&apos;s design to its implementation.
          </p>

          <div className="hero__actions">
            <ScrollLink targetId="work" className="btn btn--primary">
              View selected work
            </ScrollLink>
            <ScrollLink targetId="contact" className="btn btn--secondary">
              Contact me
            </ScrollLink>
          </div>

          <ul className="hero__stack" aria-label="Core technologies">
            <li>Unity</li>
            <li aria-hidden="true">·</li>
            <li>C#</li>
            <li aria-hidden="true">·</li>
            <li>Gameplay systems</li>
            <li aria-hidden="true">·</li>
            <li>Level design</li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <CombatLoop />
        </div>
      </div>
    </section>
  );
}

/**
 * A small, automatic "SYSTEM // COMBAT LOOP" visualization — a stylized
 * debug/prototype view of a simple gameplay loop:
 *
 *   IDLE → TARGETING → ATTACK → HIT → DAMAGE → DEFEATED → RESET
 *
 * A player token approaches an enemy, strikes, the enemy takes damage
 * and is defeated, then the scene resets and repeats. Pure CSS
 * animation, no libraries, no interactivity. Decorative — supports the
 * hero rather than competing with it.
 */
function CombatLoop() {
  return (
    <div className="loop">
      <div className="loop__frame">
        <span className="loop__tag">system // combat loop</span>
        <span className="loop__status">
          <span className="loop__status-dot" />
          auto
        </span>
      </div>

      <div className="loop__stage">
        {/* arena floor grid + ground line */}
        <div className="loop__arena" />
        <div className="loop__ground" />

        {/* enemy HP bar — drains on hit, resets on respawn */}
        <div className="loop__enemy-hpbar">
          <span className="loop__enemy-hpbar-fill" />
        </div>

        {/* the player — approaches, lunges, recoils, returns */}
        <span className="loop__player" />
        <span className="loop__player-trail" />

        {/* the enemy — targeted, hit, defeated, respawns */}
        <span className="loop__enemy" />
        <span className="loop__enemy-target" />

        {/* attack VFX — slash line + impact ring + damage number */}
        <span className="loop__strike" />
        <span className="loop__impact" />
        <span className="loop__damage">-25</span>

        {/* state label over the arena that reflects the current phase */}
        <span className="loop__phase">attack</span>
      </div>

      <div className="loop__readout">
        <span className="loop__readout-item">
          <span className="loop__readout-key">player</span>
          <span className="loop__readout-val">hp 100 · attack</span>
        </span>
        <span className="loop__readout-sep" aria-hidden="true" />
        <span className="loop__readout-item">
          <span className="loop__readout-key">enemy</span>
          <span className="loop__readout-val loop__enemy-state">targeted</span>
        </span>
        <span className="loop__readout-sep" aria-hidden="true" />
        <span className="loop__readout-item">
          <span className="loop__readout-key">event</span>
          <span className="loop__readout-val loop__event-val">damage_dealt</span>
        </span>
      </div>
    </div>
  );
}
