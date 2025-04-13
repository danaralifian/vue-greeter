import { describe, it, expect, beforeEach, beforeAll, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import Greeter from "../Greeter.vue";
import { useGreeterStore } from "../stores/greeter";

describe("Greeter Component", () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(Greeter, {
      props: {
        message: "Test message",
      },
    });
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("shows modal when button is clicked", async () => {
    const message = "Hello from test!";
    const wrapper = mount(Greeter, {
      props: { message },
      global: {
        plugins: [createPinia()],
      },
    });

    await wrapper.find("button").trigger("click");
    const modal = wrapper.find("dialog");
    expect(modal.exists()).toBe(true);
    expect(modal.text()).toContain(`${message} (clicked 1 times)`);
  });

  it("updates message when prop changes", async () => {
    const wrapper = mount(Greeter, {
      props: { message: "Initial message" },
      global: {
        plugins: [createPinia()],
      },
    });

    await wrapper.setProps({ message: "Updated message" });
    await wrapper.find("button").trigger("click");
    const modal = wrapper.find("dialog");
    expect(modal.text()).toContain("Updated message (clicked 1 times)");
  });

  it("tracks click count", async () => {
    const wrapper = mount(Greeter, {
      props: { message: "Test message" },
      global: {
        plugins: [createPinia()],
      },
    });

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("Button clicked: 2 times");
    const modal = wrapper.find("dialog");
    expect(modal.text()).toContain("Test message (clicked 2 times)");
  });

  it("closes modal when close button is clicked", async () => {
    const wrapper = mount(Greeter, {
      props: { message: "Test message" },
      global: {
        plugins: [createPinia()],
      },
    });

    await wrapper.find("button").trigger("click");
    const closeButton = wrapper.find(".close-button");
    await closeButton.trigger("click");
    const store = useGreeterStore();
    expect(store.isModalOpen).toBe(false);
  });
});
