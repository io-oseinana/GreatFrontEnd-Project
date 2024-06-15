fetch("../data/pricingData.json")
  .then((response) =>
    response.json().then((pricingData) => {
      const subscriptionContainer =
        document.querySelector(".subscription-tier");
      let currentPricing = "monthly";

      const createCards = (plan) => {
        const pricingCard = document.createElement("div");
        pricingCard.className = `pricing-card ${plan.popular ? "popular" : ""}`;

        const highlight = document.createElement("div");
        highlight.className = "highlight";
        highlight.textContent = plan.popular ? "Most Popular" : "";

        // text pair container one

        const textPairOne = document.createElement("div");
        textPairOne.className = "text-pair";

        const planTitle = document.createElement("h2");
        planTitle.textContent = plan.plan;

        const planDescription = document.createElement("p");
        planDescription.textContent = plan.description;

        // append children

        textPairOne.appendChild(planTitle);
        textPairOne.appendChild(planDescription);

        // text pair container two

        const textPairTwo = document.createElement("div");
        textPairTwo.className = "text-pair";

        const price = document.createElement("div");
        price.className = "price";

        const monthlyPrice = document.createElement("p");
        monthlyPrice.textContent =
          currentPricing === "monthly" ? plan.monthlyPrice : plan.annualPrice;

        const month = document.createElement("span");
        month.textContent = " / month";

        const bill = document.createElement("p");
        bill.textContent =
          currentPricing === "monthly" ? "Billed Monthly" : "Billed Annually";

        // append children

        price.appendChild(monthlyPrice);
        price.appendChild(month);

        //  append children

        textPairTwo.appendChild(price);
        textPairTwo.appendChild(bill);

        const featureList = document.createElement("ul");
        featureList.className = "row-one";
        featureList.role = "list";

        plan.features.forEach((feature) => {
          const listItem = document.createElement("li");
          const textBody = document.createElement("div");
          textBody.className = "text-body";

          const textPair = document.createElement("div");
          textPair.className = "text-pair";

          // Create the SVG element and its child elements
          const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          svg.setAttribute("viewBox", "0 0 24 24");
          svg.setAttribute("fill", "currentColor");
          svg.setAttribute("width", "24"); // Set the width of the SVG
          svg.setAttribute("height", "24"); // Set the height of the SVG

          const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );
          path.setAttribute(
            "d",
            "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
          );

          svg.appendChild(path); // Append the path to the SVG
          listItem.appendChild(svg); // Append the SVG to the list item

          const text = document.createElement("p");
          text.textContent = feature;

          textPair.appendChild(text);
          textBody.appendChild(textPair);
          listItem.appendChild(textBody);

          featureList.appendChild(listItem);
        });

        const button = document.createElement("button");
        button.className = "btn-buy-now";

        const buttonText = document.createElement("span");
        buttonText.textContent = "Buy Now";

        button.appendChild(buttonText);

        
        pricingCard.appendChild(highlight);
        pricingCard.appendChild(textPairOne);
        pricingCard.appendChild(textPairTwo);
        pricingCard.appendChild(featureList);

        if (plan.popular) {
          const footer = document.createElement("div");
          footer.className = "footer";
          footer.appendChild(button);
          pricingCard.appendChild(footer);
        } else {
          pricingCard.appendChild(button);
        }
        return pricingCard;
      };

      const createPlanContainer = (planName) => {
        const planContainer = document.createElement("div");
        planContainer.className = `${planName
          .replace(/\s+/g, "-")
          .toLowerCase()}`;
        return planContainer;
      };

      pricingData.forEach((plan) => {
        const planContainer = createPlanContainer(plan.plan);
        const pricingCard = createCards(plan);
        planContainer.appendChild(pricingCard);
        subscriptionContainer.appendChild(planContainer);
      });
    })
  )
  .catch((error) => console.error("Error fetching the pricing data:", error));
