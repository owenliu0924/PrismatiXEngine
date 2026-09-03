Engine.RegisterCommand("family.sparkle", async ({message}) => {
  Engine.log("family.sparkle", message);
  await Engine.emit("family.memory", {message});
  await Engine.WaitSeconds(0);
});

Engine.RegisterCommand("family.unlock", ({id}) => Engine.UnlockCG(id));
Engine.RegisterAction("family.openGallery", () => Engine.ShowModal("gallery"));

// Declared once in JavaScript, executed per-frame by the native compositor.
// The symbolic inputs document that this plan consumes both screen snapshots;
// no per-tile JavaScript draw loop runs during playback.
Engine.RegisterScreenEffect("family-tile-flip", {
  operator: "tiles",
  columns: 10,
  rows: 6,
  stagger: 0.42,
  order: "row-major",
  outgoing: {kind: "screen-texture", slot: "outgoing"},
  incoming: {kind: "screen-texture", slot: "incoming"},
  progress: {kind: "effect-parameter", name: "progress"},
  viewport: {kind: "effect-parameter", name: "viewport"},
});

Engine.SetRouteTransition("title", "hud", {
  preset: "family-tile-flip", durationSeconds: 0.9,
});
Engine.SetRouteTransition("title", "gallery", {
  preset: "slide-left", durationSeconds: 0.38,
});
Engine.SetRouteTransition("gallery", "title", {
  preset: "slide-right", durationSeconds: 0.34,
});
for (const screen of ["gallery", "backlog", "save", "load"]) {
  Engine.SetRouteTransition("hud", screen, {
    preset: screen === "backlog" ? "crossfade" : "slide-left",
    durationSeconds: screen === "backlog" ? 0.28 : 0.34,
  });
  Engine.SetRouteTransition(screen, "hud", {
    preset: screen === "backlog" ? "crossfade" : "slide-right",
    durationSeconds: screen === "backlog" ? 0.24 : 0.3,
  });
}

Engine.on("family.memory", ({message}) => {
  Engine.log("family.memory", message);
});
